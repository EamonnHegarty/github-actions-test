// support/utils.js

function getUrlForEnvironment(env) {
  switch (env) {
    case "dev":
      return "http://localhost:3000/";
    case "test":
      return "https://www.google.com/";
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

export default getUrlForEnvironment;
