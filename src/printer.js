const BankAccount = require("../src/bankaccount.js")

class Printer {

    constructor(transactions) {
        this.transactions = transactions
    }

    printStatement() {
        const rows = []
        rows.push(`    Date    || Credit  || Debit  ||  Balance`)
        for (const row of this.transactions) {
            rows.push(`${row.date}  || ${row.credit}  || ${row.debit}  || ${row.balance}`)
        }
        console.log(rows.join('\n'));
        return rows.join('\n')
    }
}

module.exports = Printer