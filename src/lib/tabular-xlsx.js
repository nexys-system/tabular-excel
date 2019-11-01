import xl from 'excel4node';

const worksheet = (wb, rows, worksheetName) => {
  const ws = wb.addWorksheet(worksheetName);

  // go through `rows`
  rows.map((row, i) => {
    // go through `columns`
    row.map((val, j) => {
      const cell = ws.cell(i+1, j+1);

      if (typeof val !== 'object') {
        val = {content: val};
      }

      switch (typeof val.content) {
        case 'number':
          cell.number(val.content);
          break;
        case 'string':
          if (val.content.startsWith('http://') || val.content.startsWith('https://')) {
            cell.link(val);
          } else {
            cell.string(val.content);
          }
          break;
        default:
          cell.string('N/A')
          break;
      }

      if (val.style) {
        cell.style(val.style)
      }

      return true;
    });
    return true;
  });

  return true;
}

/**
 * creates xlsx from rows
 * @param  rows : array of arrays. Note that if the cell can be formatted by passing an objet instead of a string, e.g. {content: 'content of the string', color: 'red', bold: true}
 * @param worksheetName : name of the worksheet
 */
export const toXlsx = async (content, worksheetName) => {
  const wb = new xl.Workbook();

  if (typeof content === 'object' && !Array.isArray(content)) {
    Object.keys(content).map(k => {
      const rows = content[k];
      console.log(rows)

      worksheet(wb, rows, k);

      return true;
    });
  } else {
    worksheet(wb, content, worksheetName);
  }

  return await wb.writeToBuffer();
}
