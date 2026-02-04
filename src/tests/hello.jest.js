import { hello } from "../modules/hello";

test('Returns hello', () => {
    expect(hello()).toBe('Hello');
})