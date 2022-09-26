import * as S from "./sql_csv";
import { test, expect } from "vitest";

test("simple", () => {
  const s = "| col1 | col2 | 23 |";
  const r = S.sqlLineToArray(s);

  expect(r).toEqual(["col1", "col2", 23]);
});

test("real", () => {
  const s = `| 1431 | 2019 | Netherlands    | a random name             | xxxxxx       | draft       |       NULL |  `;
  const r = S.sqlLineToArray(s);

  expect(r).toEqual([
    1431,
    2019,
    "Netherlands",
    "a random name",
    "xxxxxx",
    "draft",
    null,
  ]);
});

test("multiline", () => {
  const s = `
| 1431 | 2019 | Netherlands    | a random name             | xxxxxx       | draft       |       NULL |  
| 1432 | 2020 | Germany    | a random name             | yyyyy       | draft       |       NULL |  `;

  const r = S.sqlToArray(s);

  expect(r).toEqual([
    [1431, 2019, "Netherlands", "a random name", "xxxxxx", "draft", null],
    [1432, 2020, "Germany", "a random name", "yyyyy", "draft", null],
  ]);
});
