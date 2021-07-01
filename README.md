# DSB Downloader
A Node.js module to fetch the current substitution plan files from [DSB Mobile](https://www.dsbmobile.de/)

## Usage
```js
const dsb = require("dsbdownloader");

var authToken = await dsb.getAuthtoken(username, password);
var timetables = await dsb.getTimetables(authToken);

console.log(timetables);
```