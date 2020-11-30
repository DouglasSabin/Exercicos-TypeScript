import Person from "./entities/Person.js";
import Book from "./entities/Book.js";
import Periodical from "./entities/Periodical.js";
import {Gender} from "./entities/Person.js"

const pessoa1 = new Person('Douglas Sabin' , new Date('2002-05-13T00:00:00') , Gender.Male)

const pessoa2 = new Person('Gabriel Leon' , new Date('2002-03-15T00:00:00') , Gender.Male)

const pessoa3 = new Person('Mykaely Oliveira' , new Date('2002-01-01T00:00:00') , Gender.Male)

const pessoa4 = new Person('Gabriel Sossai' , new Date('2002-12-02T00:00:00') , Gender.Male)
//

const book1 = new Book('Uma Breve História do Tempo', 'O jeito Warren Buffett de investir: Os segredos do maior investidor do mundo',  new Date('2009-05-08T00:00:00'), pessoa4, 1,1, 1)

const book2 = new Book('O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios', 'Mindset: A nova psicologia do sucesso eBook Kindle',  new Date('2018-08-04T00:00:00'), pessoa2, 2, 2, 2)

const book3 = new Book('Extraordinário', 'A cinco passos de você',  new Date('2020-02-08T00:00:00') , pessoa3, 3,3, 3)

const book4 = new Book('Gatilhos Mentais: O Guia Completo com Estratégias de Negócios e Comunicações Provadas Para Você Aplicar', 'Venda à mente, não ao cliente: Como aplicar a neurociência para negociar mais falando menos',  new Date('2020-02-08T00:00:00') , pessoa1, 4,4, 4)
//

const periodical1 = new Periodical(9, 9, 9, 'Isto é', 'Veja', new Date('2010-02-18T00:00:00') , pessoa4 )

const periodical2 = new Periodical(8, 8, 8, 'Época', 'CULT', new Date('2010-02-18T00:00:00') , pessoa2 )

const periodical3 = new Periodical(7, 7, 7, 'Revista Piaui', 'Colirio', new Date('2010-02-18T00:00:00') , pessoa3 )

const periodical4 = new Periodical(6, 6, 6, 'Capricho', 'Fodey', new Date('2010-02-18T00:00:00') , pessoa1 )
//

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]

const livros = [book1, book2, book3, book4]

const periodicais = [periodical1, periodical2, periodical3, periodical4]
//

console.log(pessoa1,book4,periodical4)
console.log(pessoa2,book2,periodical2)
console.log(pessoa3,book3,periodical3)
console.log(pessoa4,book1,periodical1)