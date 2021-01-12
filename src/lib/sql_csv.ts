export const sqlLineToArray = (s: string): any[] | null => {
  const r = s.split("|");

  if (r.length === 1) {
    return null;
  }

  r.shift();
  r.pop();

  return r.map((x) => {
    const v = x.trim();

    if (v === "NULL") {
      return null;
    }

    if (Number(v)) {
      return Number(v);
    }

    return v;
  });
};

export const sqlToArray = (s: string): any[] =>
  s
    .split("\n")
    .map(sqlLineToArray)
    .filter((x) => x !== null);
