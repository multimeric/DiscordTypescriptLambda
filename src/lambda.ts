import {AWSLambdaServer, SlashCreator} from "slash-create";
import {env} from "./common"
import * as path from "path";

const creator = new SlashCreator(env);

// This defines the lambda.interactions endpoint
creator
    .withServer(new AWSLambdaServer(module.exports, 'interactions'))
    .registerCommandsIn(path.join(__dirname, 'commands'))
    .syncCommands();

