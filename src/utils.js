export const colorByStatus = status => {
  if (status === 'ok') return 'green';
  if (status === 'inactive') return 'red';
  if (status === 'pending') return 'orange';

  return null
}

export const randomInteger = () => Math.ceil(1000*Math.random());

export const bitToBlob = (x, type) => new Blob([x], {type});

export const formatJsArray = (js) => {
  if (!Array.isArray(js) || js.length === 0) {
    return [];
  }

  return '[\n\t' + js.map(row => {
    return JSON.stringify(row)
  }).reduce((a, b) => a + ',\n\t' + b) + '\n]';
}