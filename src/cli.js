// const parseArgumentsIntoOptions = require('./parseArgumentsIntoOptions').parseArgumentsIntoOptions;
// const promptForMissingOptions = require('./promptForMissingOptions').promptForMissingOptions;
// const createProject = require('./main').createProject;
import { parseArgumentsIntoOptions } from "./parseArgumentsIntoOptions.js";
import { promptForMissingOptions } from "./promptForMissingOptions.js";
import { createProject } from "./main.js";

export async  function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    await createProject(options);
   }