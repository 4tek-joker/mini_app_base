#!/usr/bin/env node
const exec = require('child_process').exec
let platform = 'ios'

process.argv.forEach(function (val, index, array) {
  if (val === '-platform') {
    platform = array[index + 1]
  }
})
exec(
  `react-native webpack-bundle --platform ${platform} --entry-file ./index.js --dev`,
)

console.log(`🖍️ build ${platform} done.`)
