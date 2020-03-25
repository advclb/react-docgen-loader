const compiler = require("./compiler");

test("JSX output match snapshot", async function () {
  const stats = await compiler("prop-types.jsx");
  const output = stats.toJson().modules[0].source;
  expect(output).toMatchSnapshot();
});

test("TSX output match snapshot", async function () {
  const stats = await compiler("typescript.tsx");
  const output = stats.toJson().modules[0].source;
  expect(output).toMatchSnapshot();
});
