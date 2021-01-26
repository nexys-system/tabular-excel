/**
 * list of examples
 */

import users from "./users.json";
import multiPageImport from "./multi-page.json";

type Status = "ok" | "inactive" | "pending";

interface CellStyle {
  font?: {
    bold?: boolean;
    color?: string;
  };
  fill?: {
    type?: string;
    patternType?: string;
    fgColor?: string;
  };
}

interface CellUnit {
  content: string | number;
  style: CellStyle;
}

export const colorByStatus = (
  status: Status
): "red" | "orange" | "green" | undefined => {
  if (status === "ok") return "green";
  if (status === "inactive") return "red";
  if (status === "pending") return "orange";

  return;
};

// for some reason with initialization when used like this.
//export const maleOrFemale = () => Math.round(Math.random());

export const randomInteger = () => Math.ceil(1000 * Math.random());

export const usersSimple = (): (CellUnit[] | string[])[] => {
  const n = 10;
  const jsContent: string[][] = users.splice(0, n).map((user) => {
    return [user.firstName, user.lastName];
  });

  const headers: CellUnit[] = ["first name", "last name"].map((x) => {
    return {
      content: x,
      style: { font: { bold: true } },
    };
  });

  return [headers, ...jsContent];
};

export const usersAdvanced = (): (CellUnit | string)[][] => {
  const styleBoldAndBlue: CellStyle = { font: { color: "blue", bold: true } };

  return users.map((user) => {
    const style: CellStyle = {
      font: { color: colorByStatus(user.status as Status) },
    };
    const status = { content: user.status, style: style };
    const age = { content: randomInteger(), style: styleBoldAndBlue };
    const maleOrFemaleInt = Math.round(Math.random()); //maleOrFemale();
    const maleOrFemaleText = maleOrFemaleInt === 1 ? "Male" : "Female";
    const maleOrFemaleColor = maleOrFemaleInt === 1 ? "blue" : "pink";
    const maleOrFemale: CellUnit = {
      content: maleOrFemaleText,
      style: {
        fill: {
          type: "pattern",
          patternType: "solid",
          fgColor: maleOrFemaleColor,
        },
        font: { color: "white" },
      },
    };

    const r: (CellUnit | string)[] = [
      user.firstName,
      user.lastName,
      status,
      age,
      maleOrFemale,
    ];

    return r;
  });
};

export const multiPage = (): {
  [key: string]: (CellUnit | string)[][];
} => multiPageImport;

export const merge = () => [
  [
    {
      content: "merged",
      merged: { v: 1, h: 2 },
    },
  ],
  [], // empty row here that will be filled with merged
  [4, 5, "https://google.com"],
];

export const simpleCsv = (): (string | number)[][] => [
  ["a", 1],
  ["c", "d"],
  ["e", "f"],
];

export const load = (exampleId: number) => {
  switch (exampleId) {
    case 1:
      return usersSimple();
    case 2:
      return usersAdvanced();
    case 3:
      return multiPage();
    case 4:
      return merge();
    case 5:
      return simpleCsv();
    default:
      break;
  }
};
