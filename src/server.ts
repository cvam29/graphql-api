
import { expressMiddleware } from '@apollo/server/express4';
import express from "express";
import {resolvers} from './graphql/resolver/resolver'
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './graphql/schema/schema';
import {ApolloServerPluginLandingPageProductionDefault,ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default'

async function startServer() {
    const app = express();
    const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        // Install a landing page plugin based on NODE_ENV
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageProductionDefault({
              graphRef: 'my-graph-id@my-graph-variant',
              footer: false,
            })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
    });
    
    app.use(express.json())
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server))
    
    app.listen(8000,()=> console.log('Server started at port 8000:'));
    
}

startServer();
