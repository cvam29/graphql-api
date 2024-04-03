import { booksData } from "../../models/data/data";

export const resolvers = {
  Query: {
   getBooks: ()=> {return booksData }
  },
};