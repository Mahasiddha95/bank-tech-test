const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
    let account;

    beforeEach(() => {
        account = new BankAccount();
    });

    it('should update the balance and transactions when deposit', () => {
      account.deposit(100);
        expect(account.balance.toFixed(2)).toBe("100.00");
        expect(account.transactions).toEqual([{
          date: expect.any(String),
          credit: "100.00",
          debit: null,
          balance: "100.00"
        }]);
    });

    it('should throw error when deposit amount is invalid', () => {
        expect(() => account.deposit(-500)).toThrow('Invalid deposit amount');
        expect(() => account.deposit('500')).toThrow('Invalid deposit amount');
    });

    it('should withdraw money', () => {
        account.deposit(1000);
        account.withdraw(500);
        expect(account.balance).toBe(500);
    });

    it('should not allow withdrawal more than balance and trhow error', () => {
        account.deposit(100);
        expect(() => {
            account.withdraw(200)
        }).toThrow('Insufficient balance');
    });

    it('should throw error when withdrawal amount is invalid', () => {
        expect(() => account.withdraw(-100)).toThrow('Invalid withdrawal amount');
        expect(() => account.withdraw("100")).toThrow('Invalid withdrawal amount');
    });

    it('should print statement', () => {
        account.deposit(1000);
        account.withdraw(500);
        account.deposit(200);
        const statement = captureOutput(() => account.printStatement());
        expect(statement).toEqual("date || credit || debit || balance\n" + new Date().toLocaleDateString() + " || 200.00 ||  || 700.00\n" + new Date().toLocaleDateString() + " ||  || 500.00 || 500.00\n" + new Date().toLocaleDateString() + " || 1000.00 ||  || 1000.00\n");
    });

    function captureOutput(cb) {
        let ret = '';
        let original = console.log;
        console.log = function (str) {
            ret += str + '\n';
        };
        cb();
        console.log = original;
        return ret;
    }
});
