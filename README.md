# Testing-workshop

This repo holds examples on how we do testing in Vizzuality. What we require you to cover is:

1. actions
2. reducers
3. selectors
4. utils & buisness logic

Each of these scenarios are showcased in this repo.

# Tools we use (TBD)

1. Jest
2. Webpack
3. Babel

# Guidelines

Each module that contains tests should be prefixed with a `_`. This makes sure the test folder ends up in the index tree position.

Our tests have a consistan naming convention so we can debug our test easy.

#### Describers

```
# Syntax
describe(`<component/module> <function>, () => {

# Example
describe('todos reducers', () => {
```

#### Condition

```
# Syntax:
it(`Should call <type> <name> and return <expected_result>`)

# Example
it(`Should call reducer for action: CREATE_TODO and return a list of todos`, () => { ... }
```

## Dealing with jest

When using jest we have a `jest.config.js` file in our root. The only thing we add here is the location to our test utils. Search for `moduleNameMapper` in that file.

## Mocking data

If you need mock data, include a mock.js file inside the _test folder so it will be easy to find. We never call real apis, data should always be mocked.

## Sagas

When dealing with sagas, dont test the implementation, your reducer/action tests should be enough.
