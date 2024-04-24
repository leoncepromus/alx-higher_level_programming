#!/usr/bin/node
import { writeFile } from 'fs';
writeFile(process.argv[2], process.argv[3], 'utf8', function (e, data) {
  if (e) return console.error(e);
});
