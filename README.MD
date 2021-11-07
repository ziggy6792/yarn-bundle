# Yarn Monorepo Backend

## FIRST THINGS FIRST

1. install lerna globally
2. install cdk globally

## PROJECT STRUCTURE

- packages/common is a common nodejs package used in both lambdas

## TYPESCRIPT CONFIGURATION

there are 3 tsconfig files in the root of the project.

- tsconfig.build.json - this is our base tsconfig file that all nested packages extend so we dont have to duplicate all the configs in this one. This tsconfig is used / called whenever we run `yarn run build`
- tsconfig.json - this extends the above tsconfig. We have one for the entire project and this is configured to give us nice intellisense in VSCODE
- tsconfig.test.json - this config is used by jest in our jest testing environment

## MONOREPO CONFIGURATION

- we use yarn workspaces. you cant use NPM on this project unless you reconfigure lerna and update the package.json to do so
- all node packages go in /packages directory

## JEST CONFIGURATION

- we use jest for testing
- see jest.config.js
- we need to use ts-jest so that type script plays nicely / gets compiled in our testing environment
- we configure our tsconfig.build to ignore our test files when we build all of our lambdas to reduce package size and allows us to keep our testing files next to our development files which I like to do to quickly see project coverage.
- run `yarn run test` or `yarn run test:watch` in root project

## GETTING STARTED

1. clone repo
2. run `yarn install` in project root to install all node dependencies for both root and nested project
3. run `lerna run build` to build all typescript code

## Development cycle

run `yarn run start` to start a local lambda server
see utils folder for how to add / remove lambdas from the server
read https://steveholgado.com/aws-lambda-local-development/ for more information

## Run local

To start local server and compile code in watch mode run `yarn start`, which will;

1. Compile all packages in watch mode
2. Start local stack (runs on docker)
3. Destory and then deploy my local cdk stack `packages/cdk-app/src/local-stacks/local-test-stack/local-test-stack.ts` to local stack which gives you the local db tables
4. Run `dynamodb-admin` on `http://localhost:8001/` so you can see the data in the local tables
5. Run backend graphql server on express on;
   `http://localhost:3100/lambda-gq-resolver/auth-none/graphql` no authentecation needed
   `http://localhost:3100/lambda-gq-resolver/auth-user/graphql` need to send cognito auth headers
   `http://localhost:3100/lambda-gq-resolver/auth-role/graphql` need to send iam auth headers
