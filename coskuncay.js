#!/usr/bin/env node
'use strict';
var c = require('chalk');
var link = require('terminal-link');
var img = require('terminal-image');
var got = require('got');
var ww = require('word-wrap');
var iq = require('inquirer');
var opn = require('open');

got('https://user-images.githubusercontent.com/29631083/153866685-ece2df83-5098-42fc-80df-1fc1af5f32d0.png', {responseType:'buffer'})
.then(function (image) { return img.buffer(image.body, {width: '40%'}) })
.then(function (image) {

console.log(image)
console.log(ww(`
Hello, this is ${c.blue.bold("Emre Coşkunçay")}!

👨‍💻 Software Engineer | ASELSAN
🚀 Flutter Lover | VueJS Developer
🌍 Backpacker | 22 countries

`.trim(), { width: 200, trim: true }));

console.log('\n\n')
iq.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'open',
    choices: [
      { name: c.gray(`💻  What am I doing about Open Source? (${c.bold('GitHub')})`), value: 'https://github.com/coskuncay' },
      { name: c.cyan(`🐦  What do I think? (${c.bold('Twitter')})`), value: 'https://twitter.com/justecdev' },
      { name: c.blue(`🏹  Curriculum vitae, the path of my life (${c.bold('LinkedIn')})`), value: 'https://linkedin.com/in/coskuncayemre' },
      { name: c.red('👋  Nope. Bye.\n'), value: false }
    ]
  }
]).then(function (a) { opn(a.open); process.exit() }).catch(function () {});
}).catch(function (e) { console.log(e)});
