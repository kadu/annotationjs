const tmi = require('tmi.js');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const dotenv = require('dotenv');
var db = null;

dotenv.config();

const TWITCH_BOT_USERNAME = process.env.BOT_USERNAME;
const TWITCH_OAUTH_TOKEN = process.env.OAUTH_TOKEN;
const TWITCH_CHANNEL_NAME = process.env.CHANNEL_NAME;

async function createDB() {
  try {
    db = await sqlite.open({ filename: './xordroid.db', driver: sqlite3.Database });
    await db.run(`CREATE TABLE IF NOT EXISTS annotation ( id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, username TEXT, annotation TEXT)`);
  } catch (error) {
    console.error(error);
  }
};

createDB();

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: TWITCH_BOT_USERNAME,
		password: TWITCH_OAUTH_TOKEN,
	},
	channels: [ TWITCH_CHANNEL_NAME ]
});
client.connect().catch(console.error);
client.on('message', async (channel, tags, message, self) => {
  if(self) return;
    if(message.toLowerCase() === '!hello') {
      client.say(channel, `@${tags.username}, heya!`);
  }
  const parsedMessage = message.split(" ");
  if(parsedMessage[0] === '!ideia') {
    const fullMessage = message.replace("!anota ","");
    await db.run("INSERT INTO annotation (username, annotation)  VALUES(?, ?)", [tags.username, fullMessage]);
		client.say(channel, `Anotado, obrigado @${tags.username}`);
  }
});
