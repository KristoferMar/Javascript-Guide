class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// Extends from Person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); // Calls the parent class constructor.
        this. phone = phone;
        this.membership = membership;
    }

    // Static function
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '30149255', 'Admin');

// We can use anything from person becuase we extended it.
console.log(john.greeting());

console.log(Customer.getMembershipCost());
