// have this in material package?
export const bitToBlob = (x: BlobPart, type: string) => new Blob([x], { type });

export const serveFile = (
  x: BlobPart,
  contentType: string,
  filename: string
) => {
  const b = bitToBlob(x, contentType);
  const url = window.URL.createObjectURL(b);

  /*
  new Promise((resolve) => {
  resolve((window.location.href = url));
});*/

  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", filename);
  a.click();
};
