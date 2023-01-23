const BankAccount = require('../src/BankAccount');

describe('BankAccount', () => {
  describe('deposit', () => {
    it('should update the balance and history', () => {
      const account = new BankAccount();
      account.deposit(100);
      expect(account.balance).toBe(100);
      expect(account.history).toEqual([{
        date: expect.any(Date),
        type: 'deposit',
        amount: 100,
        balance: 100
      }
     ]);
    });

    it('should not allow withdrawal more than balance', () => {
    const account = new BankAccount();
    account.deposit(100);
    expect(() => {
      account.withdrawal(200)
    }).toThrow('Insufficient balance');
    });
  });
});
