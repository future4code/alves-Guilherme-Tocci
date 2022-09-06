
//Exercicio 1
// A) Para realizar ações que devem ser executadas ao criar uma instância de classe.
// B) Somente uma.
// C) Criar métodos de classe do tipo públicos.


class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    };

    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };
};


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
    public getCpf(): string{
        return this.cpf
    }
    public getName(): string{
        return this.name
    }
    public getAge(): number{
        return this.age
    }
    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };

    public setBalance(newValue: number): void {
        this.balance += newValue;
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
  
  }
  const user : UserAccount = new UserAccount("001.885.55.32","UserRandom",20);
  const Transaction1= new Transaction("Pagamento conta de internet", 100, "04/10/2022")
const Transaction2 = new Transaction("Pagamento academia", 120, "23/09/2022")

user.setTransactions(Transaction1)
user.setTransactions(Transaction2)


class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    };
};
