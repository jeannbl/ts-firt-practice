class Person{
    private _name: string;
    private _lastName: string;
    private _age: number;
    private _address: string;
    private _personState: string;

    constructor(name: string, lastName: string, age: number, address: string){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._address = address;
    }

    public get name(){
        return `My name is: ${this._name}`;
    }

    public set name(name: string){
        this._name = name;
    }

    public get lastName(){
        return this._lastName;
    }

    public set lastName(lname: string){
        this._lastName = lname;
    }

    public get age(): number{
        return this._age;
    }
    
    public set age(age: number){
        this._age = age;
    }

    public get personState(){
        return this.ageState(this._age);
    }

    public set personState(state: string){
        this._personState = state;
    }

    public get address(): string{
        return this._address;
    }

    public set address(addr: string){
        this._address = addr;
    }

    private ageState(age: number){
        let result: string;

        if(age >= 60){
            result = `${this._age} Adulto Mayor`;
        }else if(age > 45 && age < 60 ){
            result = `Adulto`;
        }else if(age >= 18 && age <= 45){
            result = `Joven`;
        }else if(age >= 11 && age < 18){
            result = 'Adolescente';
        }else{
            result = 'nino';
        }

        return result;
    }
}

class Student extends Person{

    private _code: string;
    private _grade: number;

    constructor(code: string, grade: number){
        super("Mary", "Slassor", 18, "Av Simon Lopez");
        this._code = code;
        this._grade = grade;
    }

    public get code(){
        return this._code;
    }

    public set code(code: string){
        this._code = code;
    }

    public get grade(){
        return this._grade;
    }

    public set grade(grade: number){
        this._grade = grade;
    }
}
console.log("-----------Person Information-----------");
let person = new Person('Juan', "Perez", 41, "Av. Simon Lopez");

person.personState = 'adulto mayor';
console.log(`${person.name} ${person.lastName}`);
console.log(`I´m ${person.age} years old, and I´m ${person.personState}`);
console.log(`I´m live on ${person.address}`);
console.log();

console.log("-----------Student Information-----------");
let objPerson = new Student("ST-215", 4.5);
objPerson.address = "San Martin Street";

console.log(`${objPerson.name} ${objPerson.lastName}`);
console.log(`I am ${objPerson.age} years old.`);
console.log(`Code: ${objPerson.code}`);
console.log(`Grade: ${objPerson.grade}`);
console.log(`Address: ${objPerson.address}`);
