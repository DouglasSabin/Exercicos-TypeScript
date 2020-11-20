class Person
{
    name : String;
    birth : Date;
    gender : Gender;

    constructor (name: String, birth : Date , gender: Gender)
    {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
    }
}

export enum Gender{
    Female = 'f',
    Male = 'm'
}


export default Person;
