#!/usr/bin/env node

import cli from "commander";
import get from '@amir-cli/cli-get'
import set from '@amir-cli/cli-set'
import init from '@amir-cli/cli-init'

get()
set()
init()

cli.parse(process.argv);

