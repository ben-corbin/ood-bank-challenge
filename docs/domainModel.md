# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a JavaScript REPL - Node REPL or browser console  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
CLASSES, CONSTRUCTORS & METHODS --------------------------------

BankAccount - The class representing new instances of bank accounts that holds the methods and properties relating to the account

constructor - this.account = []
            - this.Balance = 0

methods - createAccount(name) // creates an object with the passed name and empty array to hold the transaction objects
        - checkBalance() // tracks the overall balance of the account
        - depositFunds(num, date) // credit the account with the amount passed 
        - withdrawFunds(num, date) // debit the account with the amount passed
        - print() // returns a list of transactions (dep & with) including date, amount, type and balance after the transaction


Customer - Holding the methods that the customer would use to create a new account, check balance, deposit, print statements and withdraw

methods - createNewAccount(uses the bank account create account method)
        - getBalance(uses the bank account checkBalance method)
        - makeDeposit(uses the bank account depositFunds method)
        - makeWithdrawal(uses the bank account withdrawFunds method)
        -getStatement(uses the bank account print method and the printer class to create a statement)

Printer - A class that holds the methods to print statements and the method to build the statement body

methods - printStatment( uses the print method from bank account to provide information to return)



#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a teacher!

