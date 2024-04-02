
import {ByProjectKeyRequestBuilder as ApiRoot, createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { ctpClient } from "./clientBuilder";

const projectkey = process.env.DEV_PROJECT_KEY || "";

const createApiClient = () => {
    return createApiBuilderFromCtpClient(ctpClient).withProjectKey({projectKey:projectkey})
}

export const apiRoot: ApiRoot = createApiClient();