"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
 
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  
  type Query {
    getBooks: [Book]
    book(id: ID!): Book
  }


  type Mutation {
    addBook(title: String!, author: String!): Book
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): ID
  }
`;
