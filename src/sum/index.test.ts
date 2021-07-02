import sum from ".";

test("returns 0 if passed an empty string", () => {
  expect(sum("")).toBe(0);
});

test("returns number if it's the only number", () => {
  expect(sum("1")).toBe(1);
});

test("returns sum if two numbers", () => {
  expect(sum("1,2")).toBe(3);
});

test("returns sum for an arbitrary number of numbers", () => {
  expect(sum("1,2,3")).toBe(6);
  expect(sum("1,2,3,4")).toBe(10);
  expect(sum("1,3,5,8,6")).toBe(23);
});

test("handles new lines instead of commas", () => {
  expect(sum("1\n2,3")).toBe(6);
});
