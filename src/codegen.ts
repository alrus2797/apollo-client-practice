import { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_URL } from "./constants";

const config: CodegenConfig = {
  schema: `${GRAPHQL_URL ?? "http://localhost:4000"}/functions/index`,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
