import { toXlsx } from './lib/tabular-xlsx';
import * as Csv from './lib/csv';

export const bitToBlob = (x, type) => new Blob([x], {type});

export const formatJsArray = (js) => {
  if (!Array.isArray(js) || js.length === 0) {
    return [];
  }

  return '[\n\t' + js.map(row => {
    return JSON.stringify(row)
  }).reduce((a, b) => a + ',\n\t' + b) + '\n]';
}

export const jsonBeautify = jsContent => JSON.stringify(jsContent,null,'  ');

export const toExport = (content, workbookName = 'MyWorkBook') => {
  const jsContent = JSON.parse(content);

  toXlsx(jsContent, workbookName).then(x => {
    const b = bitToBlob(x, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const url = window.URL.createObjectURL(b);

    // change filename
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
    // Content-Disposition: inline
    // Content-Disposition: attachment
    // Content-Disposition: attachment; filename="filename.jpg"

    window.location = url;
  });
}

export const toCsv = (content) => {
  const jsContent = JSON.parse(content);
  const x = Csv.to(jsContent)
    const b = bitToBlob(x, 'text/csv');
    const url = window.URL.createObjectURL(b);

    // change filename
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
    // Content-Disposition: inline
    // Content-Disposition: attachment
    // Content-Disposition: attachment; filename="filename.jpg"

    window.location = url;
  
}