import {SlashCreator} from "slash-create";
import {env} from "./common"
import * as path from "path";

const creator = new SlashCreator(env);

// Sync all commands before publishing
creator
    .registerCommandsIn(path.join(__dirname, 'commands'))
    .syncCommands();

