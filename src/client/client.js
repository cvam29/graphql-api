"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoot = void 0;
const platform_sdk_1 = require("@commercetools/platform-sdk");
const clientBuilder_1 = require("./clientBuilder");
const projectkey = process.env.DEV_PROJECT_KEY || "";
const createApiClient = () => {
    return (0, platform_sdk_1.createApiBuilderFromCtpClient)(clientBuilder_1.ctpClient).withProjectKey({ projectKey: projectkey });
};
exports.apiRoot = createApiClient();
