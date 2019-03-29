# Testing-workshop

Home to our test examples and workshop material

This repo holds examples on everything we want to cover during the workshop. 

1. Testing redux actions and reducers
2. Testing utilites
3. Snapshot testing (to be added)

# Some guidelines 

Our tests should have a consistant naming convention, you will see how we structure it in our examples but TLDR;

each test folder should be prefixed with a `_` this ensures it ends up ontop of the tree for redability.

## Describer

The describer should be named like this: `<component/module> <function>'`so for example a reducer test would look like this: `describe('todos reducers', () => {` 

## Condition 

`Should call <component/module> for <function>: ${constant here} and return <result>` so for example on the same reducer it would look like this: 

```
it(`Should call reducer for action: ${types.CREATE_TODO} and return a list of todos`, () => {
```

## Mocks

If you need mock data, include a mock.js file inside the _test folder. 