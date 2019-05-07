export default class Book {
  title : string;
  author: string;
  coverID: number;

  constructor(title: string, author: string, coverID: number) {
    if (!!!title) {
      return null;
    }

    this.title = title;
    this.author = author;
    this.coverID = coverID;
  }
}