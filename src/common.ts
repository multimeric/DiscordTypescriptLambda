import {SlashCommand, SlashCommandOptions, SlashCreator} from "slash-create";

const requiredVars = ['DISCORD_APP_ID', 'DISCORD_BOT_TOKEN', 'DISCORD_PUBLIC_KEY'];
const envKeys = new Set(Object.keys(process.env));
if (!requiredVars.every(item => envKeys.has(item))){
    throw new Error(`You must export all of the following variables: ${requiredVars.join(', ')}`);
}

export const env = {
    applicationID: process.env.DISCORD_APP_ID!,
    publicKey: process.env.DISCORD_PUBLIC_KEY!,
    token: process.env.DISCORD_BOT_TOKEN!
};

export class LambdaSlashCommand extends SlashCommand {
    constructor(creator :SlashCreator, opts:SlashCommandOptions) {
        // Patch in the guild ID if we have one
        if (process.env.GUILD_ID){
            opts.guildIDs = [process.env.GUILD_ID];
        }
        super(creator, opts);
    }
}