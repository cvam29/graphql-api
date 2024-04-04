import { GraphQLArgs } from "graphql";
import { Book, books } from "../../models/book";

export const resolvers = {
  Query: {
    getBooks: () => { return books;},

    book: (_:any, args: { id: string }): Book | undefined => {
      return books.find(book => book.id === args.id);
    },
  },

  Mutation: {
    addBook: (_: any, args: { title: string; author: string }): Book => {
      const newBook = { id: generateId(), title: args.title, author: args.author };
      books.push(newBook);
      return newBook;
    },

    updateBook: (_: any, args: { id: string; title?: string; author?: string }): Book => {
    
      const bookIndex = books.findIndex(book => book.id === args.id);
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
      const book = books[bookIndex];
      if (args.title) books[bookIndex].title = args.title;
      if (args.author) books[bookIndex].author = args.author;
      
      
      return books[bookIndex];
    },

    deleteBook: (_: any, args: { id: string }): { message: string, book: Book }=> {
      const index = books.findIndex(book => book.id === args.id);
      if (index === -1) {
        throw new Error('Book not found');
      }
     const deletedBook= books.splice(index, 1)[0];
     return {
      message: `Book with id ${args.id} is deleted.`,
      book: deletedBook
    };
    }
  }
};
let currentId = 5;

function generateId() {
  currentId += 1; 
  return currentId.toString(); 
}