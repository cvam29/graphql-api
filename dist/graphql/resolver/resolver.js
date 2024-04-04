"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const book_1 = require("../../models/book");
exports.resolvers = {
    Query: {
        getBooks: () => { return book_1.books; },
        book: (_, args) => {
            return book_1.books.find(book => book.id === args.id);
        },
    },
    Mutation: {
        addBook: (_, args) => {
            const newBook = { id: generateId(), title: args.title, author: args.author };
            book_1.books.push(newBook);
            return newBook;
        },
        updateBook: (_, args) => {
            const bookIndex = book_1.books.findIndex(book => book.id === args.id);
            if (bookIndex === -1) {
                throw new Error('Book not found');
            }
            const book = book_1.books[bookIndex];
            if (args.title)
                book_1.books[bookIndex].title = args.title;
            if (args.author)
                book_1.books[bookIndex].author = args.author;
            return book_1.books[bookIndex];
        },
        deleteBook: (_, args) => {
            const index = book_1.books.findIndex(book => book.id === args.id);
            if (index === -1) {
                throw new Error('Book not found');
            }
            const deletedBook = book_1.books.splice(index, 1)[0];
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
