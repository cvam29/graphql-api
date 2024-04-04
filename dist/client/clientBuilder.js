"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctpClient = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const sdk_client_v2_1 = require("@commercetools/sdk-client-v2");
dotenv_1.default.config();
const { DEV_CLIENT_ID = '', DEV_CLIENT_SECRET = '', DEV_PROJECT_KEY = '', DEV_API_URL = '', DEV_AUTH_URL = '', } = process.env;
const scopes = [process.env.DEV_SCOPES || ''];
const projectKey = DEV_PROJECT_KEY;
// Configure authMiddlewareOptions
const authMiddlewareOptions = {
    host: DEV_AUTH_URL,
    projectKey: projectKey,
    credentials: {
        clientId: DEV_CLIENT_ID,
        clientSecret: DEV_CLIENT_SECRET,
    },
    scopes: scopes,
    fetch: node_fetch_1.default,
};
// Configure httpMiddlewareOptions
const httpMiddlewareOptions = {
    host: DEV_API_URL,
    fetch: node_fetch_1.default,
};
// Export the ClientBuilder
exports.ctpClient = new sdk_client_v2_1.ClientBuilder()
    .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware() // Include middleware for logging
    .build();
