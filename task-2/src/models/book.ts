export default class Book {
  title : string;
  author: string;
  coverID: number;

  constructor(title: string, author: string, coverID: number) {
    this.title = title;
    this.author = author;
    this.coverID = coverID;
  }
}