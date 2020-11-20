 import Document from "./Documents.js";
 import Person from "./Person.js";
 

 class Periodical extends Document {
    issn : Number;
    volume : Number;
    issue : Number;

    constructor ( issn: Number, volume: Number, issue: Number, title : String, subtitle : String, publishedAt : Date | number, author : Person){

        super(title, subtitle, publishedAt, author)
        this.issn = issn;
        this.volume = volume;
        this.issue = issue;
    }
 }
 export default Periodical