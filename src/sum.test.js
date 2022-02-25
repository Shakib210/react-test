// test('my first test',()=>{
//     let data=12;
//     expect(data).toBe(12);
// })

// it('my second test',()=>{  // it and test are same
//     let data=123;
//     expect(data).toBe(123);
// })

import { sum, objectChecker } from "./sum";

describe("sum test", () => {
  test("my first test", () => {
    let data = 12;                 //equal
    expect(sum(1,2)).toBe(3);
  });

  test("my 2nd test", () => {
    let data = 12;
    expect(sum(1,2)).not.toBe(4);  // not equal
  });

  test("my 3rd test", () => {
      expect(objectChecker(1,2)).toEqual({a:1, b:2}) //check are objects are equal.
  })
});
