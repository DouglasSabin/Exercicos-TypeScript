import Person from "./entities/Person.js";
import { Gender } from "./entities/Person.js"

const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLInputElement>('#gender')!
const birth = document.querySelector<HTMLInputElement>('#birth')!
const message = document.querySelector<HTMLInputElement>('#message')!
const form = document.querySelector('form')!
const table = document.querySelector<HTMLTableCaptionElement>('table')!

const Persons: Person[] = []
showPersons()

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const capitalize = (text: string) => {
        const words = text.split(' ')

        for (let i = 0; i < words.length; i++) {
            words[i] =
                words[i].substr(0, 1).toUpperCase() +
                words[i].substr(1).toLowerCase()
        }

        return words.join(' ')
            .replace(/ e /gi, ' e ')
            .replace(/ da /gi, ' da ')
            .replace(/ de /gi, ' de ')
            .replace(/ do /gi, ' do ')
            .replace(/ dos /gi, ' dos ')
            .replace(/ das /gi, ' das ')
            .replace(/ o /gi, ' o ')
            .replace(/ as /gi, ' as ')
            .replace(/ nos /gi, ' nos ')
            .replace(/ nas /gi, ' nas ')
            .replace(/ na /gi, ' na ')
    }


    const trimAll = (text: string) => text.trim().replace(/\s+/g, ' ')

    let valorNome = trimAll(name.value.trim())

    capitalize(valorNome)


    if (!valorNome) {
        message.innerText = 'Preencha todo o campo'
        name.focus()
        return
    }

    const regexNome = /\w+\s\w+/g


    if (!birth.value) {
        message.innerText = "Esta estapa e obrigatoria!"
        birth.focus()
        return
    }

    const data_nascimento = new Date('${birth.value}T00:00:00')
    console.log(birth.value)

    if (Date.now() - Number(data_nascimento) < 0) {
        message.innerText = 'Nascimento erro'
        birth.focus
        return
    }

    if (!gender.value) {
        message.innerText = 'O campo sexo'
        gender.focus()
        return
    }

    try {
        var birthNew = new Date(birth.value)

        const person = new Person(capitalize(trimAll(name.value)), birthNew, gender.value === 'f' ? Gender.Female : Gender.Male)

        Persons.push(person)

        localStorage.setItem('persons', JSON.stringify(Persons))
        showPersons()
    }

    catch (error: any) {
        message.innerText = 'Erro!.'
    }

})

export function showPersons() {
    if (localStorage.getItem('persons')) {
        const data = JSON.parse(localStorage.getItem('persons')!)

        Persons.splice(0)

        for (const item of data) {
            Persons.push(new Person(item.name, item.birth, item.gender))
        }
    }
}

let personLocalStorage: Array<Person> = JSON.parse(localStorage.getItem('persons') || '{}')
let varnames = personLocalStorage.map(p => p.name)
let varbirth = personLocalStorage.map(p => p.birth)



let sortNames = [...varnames].sort()

let lines = ' '

for (let i = 0; i < sortNames.length; i++) {
    lines += `
        <tr>
        <td>${sortNames[i]}</td>
        <td>${varbirth[i]}</td>
        </tr>
        `
}

table.style.display = 'block'
table.innerHTML = `
  <thread>
    <tr> 
        Autores: 
    </tr>
    
  </thread>
  <tbody>
    ${lines}
  </tbody>
            `
export default Person