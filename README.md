# Testing workshop

This repo contains some examples on how we do testing at vizzuality.

# 4 rules of thumbs

## 1. Each module that contains tests should have the test folder prefixed with a underscore(`_`)

This makes sure the test folder ends up in the **index of the current tree position**.

The reason for this is so that when doing code reviews or working on a project it will be easy for your peers (and you) to locate if tests are in place.

## 2. Never reference a module/function outside of current module in your tests

We want to keep our tests tidy, the tests that are define in the current module should only reflect that module. Otherwise we will run into problem if for example: folder struture or buisness logic change.

## 3. Treat your tests as it will be shown to a client

Keep your tests structured and organized. Each test should do one thing, and one thing good.

## 4. Dont test implementations, make your life easy

When working with for example thunk actions or sagas, we dont want to test the implementation. (rodrigo put learnings here)

# Code organization guidelines

## Defining your tests

When writing/reviewing tests, you should think of these 4 things.

1. Whats the initial state?
2. Whats the input?
3. What should we call?
4. What output do we expect?

Here is a example template:

```js
it('Should call setAccount and set user in our state', () => {
  const initialState = { user: null };
  const input = { firstname: 'John', lastname: 'Doe' };

  const expectedResult = { user: input };

  expect(setAccount(input)).toEqual(expectedResult);
});
```

Try to follow this convention whenever writing your conditions. If you write/review a test that is loger than **15 lines**, usualy its doing more than one thing. Kepp that in mind when reviewing.

## 3 Rules of mocking

### 1. Always mock your data

Never include api calls or dynamic data in your tests. Everything should be mocked.

### 2. Dont put mocks in your test file

When you have mock data, always keep it in a `mock.js` file/folder in your test directory.

### 3. Keep your mocks clean!

Dont just copy/paste api results in your mock. A mock should be easy to debug and it should be clear whats going on when debugging. Only include mock keys / data that is required by your logic.
