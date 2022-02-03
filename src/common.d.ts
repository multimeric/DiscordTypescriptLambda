import { SlashCommand, SlashCommandOptions, SlashCreator } from "slash-create";
export declare const env: {
    applicationID: string;
    publicKey: string;
    token: string;
};
export declare class LambdaSlashCommand extends SlashCommand {
    constructor(creator: SlashCreator, opts: SlashCommandOptions);
}
