import Person from "./entities/Person.js";
import {Gender} from "./entities/Person.js"

const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLInputElement>('#gender')!
const birth = document.querySelector<HTMLInputElement>('#birth')!
const message = document.querySelector<HTMLInputElement>('#message')!
const form = document.querySelector('form')!

const Persons: Person[] = []
showPersons()

form.addEventListener('submit', (e: Event) => 
{
    e.preventDefault()

    const valorNome = name.value.trim()

    if (!valorNome)
    {
        message.innerText = 'Preencha todo o campo'
        name.focus()
        return
    }

    const regexNome = /\w+\s\w+/g

    if (!regexNome.test(valorNome)){
        message.innerText = "digite seu nome completo"
        name.focus()
        return
    }

    if (!birth.value){
        message.innerText = "Esta estapa e obrigatoria!"
        birth.focus()
        return
    }

    const data_nascimento = new Date('${birth.value}T00:00:00')
    console.log(birth.value)
    
    if(Date.now() - Number(data_nascimento) < 0) 
    {
        message.innerText = 'Nascimento erro'
        birth.focus
        return
    }

    if(!gender.value) {
        message.innerText= 'O campo sexo'
        gender.focus()
        return
    }

    try{
    var birthNew = new Date(birth.value)

    const person = new Person(name.value, birthNew, gender.value === 'f' ? Gender.Female : Gender.Male)

    Persons.push(person)

    localStorage.setItem('persons', JSON.stringify(Persons))
    showPersons()
    }

    catch(error: any){
        message.innerText ='Erro!.'
    }

})

function showPersons() {
    if(localStorage.getItem('persons')) {
    const data = JSON.parse(localStorage.getItem('persons')!)
        Persons.splice(0)

        for(const item of data) {
            Persons.push(new Person(item.name, item.birth, item.gender))
        }
    }
    
}
export default Persons