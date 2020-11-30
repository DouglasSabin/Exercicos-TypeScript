import Person from "./Person.js";
import Document from "./Documents.js"

class Book extends Document {
    isbn : Number;
    edition : Number;
    volume : Number;

    constructor (title : String, subtitle : String, publishedAt : Date | number, author : Person, isbn : Number, edition : Number, volume : Number, ) {
            super(title, subtitle, publishedAt, author)
        this.isbn = isbn;
        this.edition = edition;
        this.volume = volume;
    }
}
export default Book