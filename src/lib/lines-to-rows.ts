/**
 * [description]
 * @param  {[type]} lines            [description]
 * @param  {[type]} seqNLines        n lines between different sections
 * @param  {[type]} mappingFunctions map of n line:key
 * @return {[type]}                  [description]
 */
export const lineToRows = (
  lines: any[],
  mappingAttributes: { [k: string]: any },
  seqNLines: number
): any[] => {
  let row: { [k: string]: any } = {};
  const rows: any[] = [];

  lines.map((line, i) => {
    const j = i % seqNLines;

    const t = mappingAttributes[j + 1];

    if (t) {
      row[t] = line;
    }

    if (j === seqNLines - 1) {
      rows.push(row);
      row = {};
    }

    return true;
  });

  return rows;
};
