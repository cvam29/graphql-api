"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const resolver_1 = require("./graphql/resolver/resolver");
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const schema_1 = require("./graphql/schema/schema");
const server_plugin_landing_page_graphql_playground_1 = require("@apollo/server-plugin-landing-page-graphql-playground");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const server = new server_1.ApolloServer({
            typeDefs: schema_1.typeDefs,
            resolvers: resolver_1.resolvers,
            plugins: [
                (0, server_plugin_landing_page_graphql_playground_1.ApolloServerPluginLandingPageGraphQLPlayground)()
            ],
        });
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        yield server.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(server));
        app.listen(8000, () => console.log('Server started at port 8000:'));
    });
}
startServer();
