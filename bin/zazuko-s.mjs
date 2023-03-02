#!/usr/bin/env node --no-warnings
import { argv, stdout } from 'node:process'
import shortener from '../index.js'

(async function main() {
  stdout.write(await shortener.shorten(argv[2]))
  stdout.write('\n')
})()
