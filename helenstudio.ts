/* This TypeScript code snippet is exporting an empty object `{}` to ensure that the file is treated as
a module. It then retrieves an HTML element with the id '2026' using
`document.getElementById('2026')`. If the element exists, it updates the text content of the element
to the current year using `new Date().getFullYear().toString()`. This code is likely intended to
automatically update the copyright year displayed on a webpage to the current year. */

export{};
//Automatically updates the copyright year
const yearSpan=document.getElementById('2026');
if(yearSpan){
    yearSpan.textContent=new Date().getFullYear().toString();
}