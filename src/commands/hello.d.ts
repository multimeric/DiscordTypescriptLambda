import { CommandContext, SlashCreator } from "slash-create";
import { LambdaSlashCommand } from "../common";
export default class HelloCommand extends LambdaSlashCommand {
    constructor(creator: SlashCreator);
    run(ctx: CommandContext): Promise<string>;
}
