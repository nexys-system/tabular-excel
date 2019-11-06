import xl from 'excel4node';

const getCell = (ws, i, j, merged = false) => {
  if (merged) {
    const mergeI = i + 1 + Number(merged.v);
    const mergeJ = j + 1 + Number(merged.h);
    return ws.cell(i+1, j+1, mergeI, mergeJ, true);
  }

  return ws.cell(i+1, j+1);
}

export const getMerged = (val) => {
  if (val.merged && val.merged.h && val.merged.v) {
    return val.merged;
  }

  return false;
}

export const isLink = l => l.startsWith('http://') || l.startsWith('https://');

// https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
export const isDate = d => d instanceof Date; //typeof d.getMilliseconds === 'function' && Object.prototype.toString.call(d) === '[object Date]';

export const isObjectAndNotArray = c => typeof c === 'object' && !Array.isArray(c);

const worksheet = (wb, rows, worksheetName) => {
  const ws = wb.addWorksheet(worksheetName);

  // go through `rows`
  rows.map((row, i) => {
    // go through `columns`
    row.map((val, j) => {
      if (typeof val !== 'object') {
        // reassign val
        val = {content: val};
      }

      const merged = getMerged(val);

      const cell = getCell(ws, i, j, merged);

      switch (typeof val.content) {
        case 'number':
          cell.number(val.content);
          break;
        case 'string':
          if (isLink(val.content)) {
            cell.link(val.content);
          } else {
            cell.string(val.content);
          }
          break;
        case 'object':
          if (isDate(val.content)) {
            cell.date(val.content);
          } else {
            cell.string(val.content);
          }
          break;
        case 'boolean':
          cell.bool(val.content);
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

  if (isObjectAndNotArray(content)) {
    Object.keys(content).map(k => {
      const rows = content[k];

      worksheet(wb, rows, k);

      return true;
    });
  } else {
    worksheet(wb, content, worksheetName);
  }

  return await wb.writeToBuffer();
}
