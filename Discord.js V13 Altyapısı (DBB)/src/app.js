//Made By 💖 Just1N INC.
import { Client } from "discord.js"
import { readdirSync } from "fs";
import { dotenv } from "dotenv";
const client = new client({
          intents: ["GUİLDS"],
          presence: { activities: [{ name: "DBB Altyapısı", type: "WATCHING"}] }
});
//MESSAGE
client.on("ready", () => {
          console.log("Bot Başlatıldı Made By DBB");
})
readdirSync("./events").forEach(async file => {
          const event = await import(`./events/${file}`).then(m => m.default)
          event(client);
});
client.login(process.env.token);
//Made By 💖 Just1N INC.