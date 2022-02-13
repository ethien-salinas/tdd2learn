const { helloworld } = require("../src/0-hello-world");

test('get a hello world string', () => {
  expect(helloworld()).toBe('hello world')
});
test('gets a greeting', () => {
  expect(helloworld('Ethien')).toBe('hello world Ethien')
  expect(helloworld('Ethien')).not.toBe('hello world Rich')
  expect(helloworld('Rich')).toBe('hello world Rich')
  expect(helloworld('Rich')).not.toBe('hello world Ethien')
});