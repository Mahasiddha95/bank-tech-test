const BankAccount = require('../src/BankAccount');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

    it('should update the balance and history when deposit', () => {
      account.deposit(100);
      expect(account.balance).toBe(100);
      expect(account.history).toEqual([{
        date: expect.any(Date),
        type: 'deposit',
        amount: 100,
        balance: 100
      }]);
    });

    it('should throw error when deposit amount is invalid', () => {
      expect(() => account.deposit(-500)).toThrow('Invalid deposit amount');
      expect(() => account.deposit('500')).toThrow('Invalid deposit amount');
    });

    it('should withdraw money', () => {
      account.deposit(1000);
      account.withdrawal(500);
      expect(account.balance).toBe(500);
    });

    it('should not allow withdrawal more than balance and trhow error', () => {
      account.deposit(100);
      expect(() => {
        account.withdrawal(200)
      }).toThrow('Insufficient balance');
    });

    it('should throw error when withdrawal amount is invalid', () => {
      expect(() => account.withdrawal(-100)).toThrow('Invalid withdrawal amount');
      expect(() => account.withdrawal("100")).toThrow('Invalid withdrawal amount');
    })
});

describe('BankAccount mocking', () => {
  let account;
  let outputData;
  let mockConsole;

  beforeEach(() => {
    account = new BankAccount();
    account.deposit(1000);
    account.withdrawal(500);
    outputData = captureOutput(() => {
      account.printStatement();
    mockConsole = jest.spyOn(console, 'log').mockImplementation();
    });
  });

  it('should display the statement', () => {
    let statement = account.printStatement();
    expect(statement).toMatchSnapshot();
  });

  it('should display the statement in the correct order', () => {
    let statement = account.printStatement();
    expect(statement).toEqual("date || credit || debit || balance\n24/01/2023 || 1000 ||  || 1000\n24/01/2023 ||  || 500 || 500\n");
  });

  // test('should display the statement ')

  function captureOutput(cb) {
    var ret = '';
    var original = console.log;
    console.log = function (str) {
      ret += str + '\n';
    };
    cb();
    console.log = original;
    return ret;
  }
});
