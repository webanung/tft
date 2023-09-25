"use strict";

let inputFile;
let outputFileMixins;
let outputFileClasses;
let prefix = 't3b-icon';

const { program } = require("commander");
let css = require('css');
const clone = require('clonedeep');

program
  .option("-p [value]", "Prefix of icon class")
  .argument('<input>', 'input filename')
  .argument('<mixins>', 'output filename for mixins')
  .argument('<classes>', 'output filename for classes')
  .action((input, mixins, classes) => {
    inputFile = input;
    outputFileMixins = mixins;
    outputFileClasses = classes;
  });
program.parse();

const options = program.opts();
if (options.p && options.p !== '') {
  prefix = options.p;
}

let outMixins = css.parse('');
let outClasses = css.parse('');


let fs = require('fs')
fs.readFile(inputFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var obj = css.parse(data);

  let rules = obj.stylesheet.rules;
  rules.forEach(function (rule) {

    let ruleCopy = clone(rule);
    let ruleCopy2 = clone(rule);
    if (rule.type === 'rule' && rule.selectors[0].startsWith('i[')) {
      ruleCopy.selectors = ['%'+prefix];
      outMixins.stylesheet.rules.push(ruleCopy);
      ruleCopy2.selectors.push('i[class^="'+prefix+'-"]:after');
      ruleCopy2.selectors.push('i[class*=" '+prefix+'-"]:after');
      ruleCopy2.selectors.push('.'+prefix);
      ruleCopy2.declarations = [
        {
          type: 'declaration',
          property: '@extend',
          value: '%'+prefix
        }
      ];
      outClasses.stylesheet.rules.push(ruleCopy2);
    }
    if (rule.type === 'rule' && rule.selectors[0].startsWith('.'+prefix)) {
      ruleCopy.selectors[0] = '%'+ruleCopy.selectors[0].substring(1);
      outMixins.stylesheet.rules.push(ruleCopy);
      ruleCopy2.declarations = [
        {
          type: 'declaration',
          property: '@extend',
          value: '%'+ruleCopy2.selectors[0].substring(1).substring(0,ruleCopy2.selectors[0].length - 8)
        }
      ];
      outClasses.stylesheet.rules.push(ruleCopy2);
    }
  });

  let outputStringMixins = css.stringify(outMixins);
  fs.writeFile(outputFileMixins, outputStringMixins, 'utf8', function (err) {
    if (err) return console.log(err);
  });

  let outputStringClasses = css.stringify(outClasses);
  outputStringClasses = outputStringClasses.replace(/@extend:/gi,'@extend');
  fs.writeFile(outputFileClasses, outputStringClasses, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
