import Person from "./Person.js";
import Document from "./Documents.js"

class Book extends Document {
    isbn : Number;
    edition : Number;
    volume : Number;

    constructor (isbn : Number, edition : Number, volume : Number, title : String, subtitle : String, publishedAt : Date | number, author : Person ) {
            super(title, subtitle, publishedAt, author)
        this.isbn = isbn;
        this.edition = edition;
        this.volume = volume;
    }
}
export default Book