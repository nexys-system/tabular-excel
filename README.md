# Excel Tabular Generator

![npm version](https://badge.fury.io/js/%40nexys%2Ftabular.svg)
![npm version](https://img.shields.io/npm/v/@nexys/tabular.svg)

[see website](https://nexysweb.github.io/tabular-excel) - click here if you are on the GH page

[see it in action](./build)

Turn `JSON` lists into Excel files (.xlsx).

## Lines to row

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
https://medium.com/@Nopziiemoo/create-excel-files-using-javascript-without-all-the-fuss-2c4aa5377813
https://shinglyu.com/web/2019/02/09/js_download_as_file.html
https://www.npmjs.com/package/excel4node#styles
https://www.name-generator.org.uk/quick/