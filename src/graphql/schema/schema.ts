
import { gql } from "apollo-server-express";

export const typeDefs = gql`
 
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

