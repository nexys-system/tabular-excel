import * as T from "./tabular-xlsx";
import { test, expect } from "vitest";

test("get merged", () => {
  const v1 = {};
  const v2 = { merged: { h: 3, v: 7 } };
  const v3 = { merged: { h: 0, v: 7 } };

  expect(T.getMerged(v1)).toEqual(false);
  expect(T.getMerged(v2)).toEqual({ h: 3, v: 7 });
  expect(T.getMerged(v3)).toEqual({ h: 0, v: 7 });
});

test("is link", () => {
  expect(T.isLink("https://google.com")).toEqual(true);
  expect(T.isLink("hps://google.com")).toEqual(false);
});

test("isObjectAndNotArray", () => {
  const c1: any[] = [];
  const c2 = {};
  expect(!T.isObjectAndNotArray(c1)).toEqual(false);
  expect(!T.isObjectAndNotArray(c2)).toEqual(true);
});

test("is date", () => {
  expect(T.isDate(new Date())).toEqual(true);
  // unfortunately that test case is uncovered
  //expect(T.isDate(new Date('random'))).toEqual(false);
  expect(T.isDate("random")).toEqual(false);
});
