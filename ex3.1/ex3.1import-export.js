import name,{moooooooooooooooo,adeeeeeeeeeeeeeeeeeeb,maaaaaa} from './module.mjs'
import fs from 'fs';
 let key=process.env.REACT_APP_KEY;
/**
 * import:
 *   Lexical; will be sorted to the top of the current file.
 *   Only can be called in the beginning.
 *   Able to load partially (saving a lot of memories).
 * require:
 *   Non-lexical; stay wherever it called.
 *   Can be called anytime.
 *   Not able to load partially.
 * 
 * to enable import we need to add "type"="module" to the package.json file and change the extension of the file to
 * file witch we import the functions/variables from to mjs
 */
console.log(name);
console.log(maaaaaa());
console.log(moooooooooooooooo());
console.log(adeeeeeeeeeeeeeeeeeeb());
fs.appendFileSync('module.mjs','//////////////////////////////////////////////////////');







