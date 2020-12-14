import Book from "./entities/Book.js"
import Periodical from "./entities/Periodical.js"
import showPersons from "./registro_person.js"
import Person from "./entities/Person.js"

const title = document.querySelector<HTMLInputElement>('#title')!
const subtitle = document.querySelector<HTMLInputElement>('#subtitle')!
const publishedAt = document.querySelector<HTMLInputElement>('#publishedAt')!
const author = document.querySelector<HTMLSelectElement>('#author')!
const isbn = document.querySelector<HTMLInputElement>('#isbn')!
const edition = document.querySelector<HTMLInputElement>('#edition')!
const volume = document.querySelector<HTMLInputElement>('#volume')!
const issn = document.querySelector<HTMLInputElement>('#issn')!
const issue = document.querySelector<HTMLInputElement>('#issue')!
const message = document.querySelector<HTMLParagraphElement>('#message')!
const formulario = document.querySelector<HTMLFormElement>('form')!
const select = document.querySelector<HTMLSelectElement>('#type')!
const authorName = document.querySelector<HTMLSelectElement>('#authorName')!
const table = document.querySelector<HTMLTableCaptionElement>('#table')!
const tabela = document.querySelector<HTMLTableCaptionElement>('#tabela')!

select.addEventListener('change', (ev: Event) => {
    ev.preventDefault()
    if (select.value == "l") {
        title.style.display = "block";
        subtitle.style.display = "block";
        publishedAt.style.display = "block";
        author.style.display = "block";
        isbn.style.display = "block";
        edition.style.display = "block";
        volume.style.display = "block";
        issue.style.display = "none";
        issn.style.display = "none";
        pullNames()



    } else if (select.value == "p") {
        title.style.display = "block";
        subtitle.style.display = "block";
        publishedAt.style.display = "block";
        author.style.display = "block";
        issue.style.display = "block";
        issn.style.display = 'block';
        volume.style.display = "block";
        isbn.style.display = "none";
        edition.style.display = "none";
        pullNames()

    } else {

        title.style.display = "none";
        subtitle.style.display = "none";
        publishedAt.style.display = "none";
        author.style.display = "none";
        issue.style.display = "none";
        issn.style.display = "none";
        volume.style.display = "none";
        isbn.style.display = "none";
        edition.style.display = "none";
    }
})

const Periodicals: Periodical[] = []
showPeriodicals()

const Books: Book[] = []
showBooks()

let personLocalStorage: Array<Person> = JSON.parse(localStorage.getItem('persons') || '{}')
let varnames = personLocalStorage.map(p => p.name)

formulario.addEventListener('submit', (e: Event) => {
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

    var person = personLocalStorage[parseInt(author.value)]

    if (!title.value.trim()) {
        message.innerText = 'O campo Título é obrigatório!'
        title.focus()
        return
    }

    if (!subtitle.value.trim()) {
        message.innerText = 'O campo Subtítulo é obrigatório!'
        title.focus()
        return
    }

    if (!publishedAt.value) {
        message.innerText = 'Este campo é obrigatório!'
        publishedAt.focus()
        return
    }

    const publishedDate = new Date(`^${publishedAt.value}T00:00:00`)

    if (Date.now() - Number(publishedDate) < 0) {
        message.innerText = 'Escolha uma data do passado!'
        publishedAt.focus()
        return
    }

    const authorValue = author.value.trim()
    if (!authorValue) {
        message.innerText = 'O campo Autor é obrigatório'
        author.focus()
        return
    }

    //const regexNome = /\w+\s\w+/g

    /* if (!regexNome.test(authorValue)) {
        message.innerText = 'Informe o nome completo do autor!'
        author.focus()
        return
    } */

    if (select.value == 'l') {
        if (!isbn.value) {
            message.innerText = 'O campo ISBN é obrigatório'
            isbn.focus()
            return
        }
    }

    if (!edition.value.trim()) {
        message.innerText = 'O campo Edição é obrigatório'
        edition.focus()

    }

    if (!volume.value) {
        message.innerText = 'O campo Volume é obrigatório'
        volume.focus()
        return
    }


    if (select.value == 'p') {
        if (!issn.value) {
            message.innerText = 'O campo ISSN é obrigatório'
            issn.focus()
            return
        }
    }

    if (select.value == 'p') {
        if (!issue.value.trim()) {
            message.innerText = 'O campo Issue é obrigatório'
            issue.focus()
            return
        }
    }
    message.innerText = 'Seu cadastro foi realizado com sucesso!'

    if (select.value == 'l') {
        try {
            let publishDate = new Date(publishedAt.value)
            let newISBN: Number = +isbn.value
            let newEdition: Number = +edition.value
            let newVolume: Number = +volume.value
            const book = new Book(capitalize(trimAll(title.value)), subtitle.value, publishDate, person, newISBN, newEdition, newVolume)
            Books.push(book)
            localStorage.setItem('Books', JSON.stringify(Books))
            showBooks()
        }
        catch (error: any) {
            message.innerText = 'Algo de errado não está certo!'
            return
        }
        message.innerText = 'Seu cadastro foi realizado com sucesso!'
    }

    if (select.value == 'p') {
        try {
            let publishDate = new Date(publishedAt.value)
            let newISSN: number = +issn.value
            let newVolume: number = +volume.value
            let newIssue: number = + issue.value
            const periodical = new Periodical(newISSN, newVolume, newIssue, title.value, subtitle.value, publishDate, person)

            Periodicals.push(periodical)
            localStorage.setItem('Periodicals', JSON.stringify(Periodicals))
            showPeriodicals()
        } catch (error: any) {
            message.innerText = 'Algo de errado não está certo!'
            return
        }
        message.innerText = 'Seu cadastro foi realizado com sucesso!'
    }

})

function showBooks() {
    if (localStorage.getItem('Books')) {
        const data = JSON.parse(localStorage.getItem('Books')!)

        Books.splice(0)

        for (const item of data) {
            Books.push(new Book(item.title, item.subtitle, item.publishedAt, item.author, item.isbn, item.edition, item.value))
        }
    }
}
function showPeriodicals() {
    if (localStorage.getItem('Periodicals')) {
        const data = JSON.parse(localStorage.getItem('Periodicals')!)

        Periodicals.splice(0)

        for (const item of data) {
            Periodicals.push(new Periodical(item.issn, item.volume, item.issue, item.title, item.subtitle, item.publishedAt, item.author))
        }
    }
}
function pullNames() {
    for (let i = 0; i < varnames.length; i++) {
        author.add(new Option(varnames[i].toString(), i.toString()))
    }
}

let bookLocalStorage: Array<Book> = JSON.parse(localStorage.getItem('Books') || '{}')
let vartitle = bookLocalStorage.map(p => p.title)
let varpublishedAt = bookLocalStorage.map(p => p.publishedAt)

let sortTitle = [...vartitle].sort()

let lines = ' '

for (let i = 0; i < sortTitle.length; i++) {
    lines += `
        <tr>
        <td>${sortTitle[i]}</td>
        <td>${varpublishedAt[i]}</td>
        </tr>
        `
}

table.style.display = 'block'
table.innerHTML = `
  <thread>
    <tr> 
        Livros: 
    </tr>
    
  </thread>
  <tbody>
    ${lines}
  </tbody>
            `

let periodicalsLocalStorage: Array<Periodical> = JSON.parse(localStorage.getItem('Periodicals') || '{}')
let periodicalTitle = periodicalsLocalStorage.map(p => p.title)
let sortPeriodicals = [...periodicalTitle].sort()

let linesPeriodicals = ' '

for (let i = 0; i < sortPeriodicals.length; i++) {
    linesPeriodicals += `
            <tr>
            <td>${sortPeriodicals[i]}</td>
            </tr>
                    `
}

tabela.style.display = 'block'
tabela.innerHTML = `
        <thread>
        <tr> 
        Periodicals: 
        </tr>
                
        </thread>
        <tbody>
        ${linesPeriodicals}
        </tbody>
        `
export default Person 