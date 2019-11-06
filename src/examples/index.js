/**
 * list of examples
 */

import users from './users.json';
import multiPageImport from './multi-page.json';

export const colorByStatus = status => {
  if (status === 'ok') return 'green';
  if (status === 'inactive') return 'red';
  if (status === 'pending') return 'orange';

  return null;
}

// for some reason with initialization when used like this.
//export const maleOrFemale = () => Math.round(Math.random());

export const randomInteger = () => Math.ceil(1000*Math.random());

export const usersSimple = () => {
  const n = 10;
  const jsContent = users.splice(0, n).map(user => {
    return [user.firstName, user.lastName];
  });

  const headers = ['first name', 'last name'].map(x => {
    return {
      content: x,
      style: {font: {bold: true}}
    }
  });

  jsContent.unshift(headers);

  return jsContent;
}

export const usersAdvanced = () => {
  const styleBoldAndBlue = {font: {color: 'blue', bold: true}};

  const jsContent = users.map(user => {
    const style = {font: {color: colorByStatus(user.status)}};
    const status = {content: user.status, style: style};
    const age = {content: randomInteger(), style: styleBoldAndBlue};
    const maleOrFemaleInt = Math.round(Math.random());//maleOrFemale();
    const maleOrFemaleText = maleOrFemaleInt === 1 ? 'Male' : 'Female';
    const maleOrFemaleColor = maleOrFemaleInt === 1 ? 'blue' : 'pink';
    const maleOrFemale = {
      content: maleOrFemaleText,
      style:{
        fill:{ type: 'pattern', patternType: 'solid', fgColor: maleOrFemaleColor },
        font: { color: 'white' }
      }
    };

    return [user.firstName, user.lastName, status, age, maleOrFemale];
  });

  return jsContent;
}

export const multiPage = () => {
  const jsContent = multiPageImport;

  return jsContent;
}

export const merge = () => {
  return [
    [{
      "content": "merged",
      "merged": {"v": 1, "h": 2}
    }
    ],
    [], // empty row here that will be filled with merged
    [4, 5, 'https://google.com']
  ];
}

export const load = exampleId => {
  switch (exampleId) {
    case 1:
      return usersSimple();
    case 2:
      return usersAdvanced();
    case 3:
      return multiPage();
    case 4:
      return merge();
    default:
      break;
  }
}