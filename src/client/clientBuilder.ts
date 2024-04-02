import dotenv from 'dotenv'
import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

dotenv.config();

const {
    DEV_CLIENT_ID = '',
    DEV_CLIENT_SECRET = '',
    DEV_PROJECT_KEY = '',
    DEV_API_URL = '',
    DEV_AUTH_URL = '',
    
} = process.env;

const scopes = [process.env.DEV_SCOPES|| ''];
const projectKey =DEV_PROJECT_KEY;
// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: DEV_AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: DEV_CLIENT_ID,
    clientSecret: DEV_CLIENT_SECRET,
  },
  scopes:scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host:DEV_API_URL ,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();


