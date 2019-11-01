# Excel Tabular Generator

![npm version](https://badge.fury.io/js/%40nexys%2Ftabular.svg)
![npm version](https://img.shields.io/npm/v/@nexys/tabular.svg)

[see website](https://nexysweb.github.io/tabular-excel) - click here if you are on the GH page

[see it in action](./build)

Turn `JSON` lists into Excel files (.xlsx).

## Multi pages

if the input is an object: keys are worksheet names and values are the array needed to create the content of the worksheet

## Styling cells

Instead of having a string with the content of a cell, use `{content: 'cell content', style}`. `style` is an object containing the style of the cell.

Documentation can be found here: [Style documentation of Excel 4 Nodes](https://www.npmjs.com/package/excel4node#styles)

# Lines to row

Sometimes structured data are newline delimited, see example below:
``` 
firstName1
lastName1
email1
firstName2
lastName2
email2
```

We define the following attributes: `firstName` `lastName` and `email1`

Lines to row then turns the above into 

```
[
  {firstName: 'firstName1', lastName: 'lastName1', email: 'email1'},
  {firstName: 'firstName2', lastName: 'lastName2', email: 'email2'}
]
```

## Resources
* https://medium.com/@Nopziiemoo/create-excel-files-using-javascript-without-all-the-fuss-2c4aa5377813
https://shinglyu.com/web/2019/02/09/js_download_as_file.html
https://www.name-generator.org.uk/quick/