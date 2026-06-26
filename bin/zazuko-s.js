#!/usr/bin/env node --no-warnings
import { argv, stdout } from "node:process";
import { shorten } from "../index.js";

(async function main() {
  stdout.write(await shorten(argv[2]));
  stdout.write("\n");
})();
