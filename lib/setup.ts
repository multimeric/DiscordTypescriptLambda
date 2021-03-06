import { SlashCreator } from "slash-create";
import { commands, getSlashEnv } from "./common";

export async function handler() {
  // Sync all commands before publishing
  const creator = new SlashCreator(getSlashEnv());
  await creator.registerCommands(commands).syncCommandsAsync();

  /*
    Put your setup actions here, e.g. loading data into a database
    */

  return "Setup completed";
}
