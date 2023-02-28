import * as Oceanic from "oceanic.js";
import "dotenv/config";

new Oceanic.Client({auth: `Bot ${process.env.BOT_TOKEN}`}).connect();
console.log("Conclusion github actions deploy typescript bot.");