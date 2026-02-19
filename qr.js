const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Arslan_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function UMAIR_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_UMAIR_Tech = UMAID_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_UMAID_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_UMAIR_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_UMAIR_Tech.sendMessage(Qr_Code_By_Arslan_Tech.user.id, { text: 'ARSLAN-MD~' + b64data });
	
				   let Arslan_MD_TEXT = `
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨UMAIR-MD🔷
║ ✨UMAIRMD OFFICIAL🔷
╚════════════════════╝


---

╔════════════════════◇
║『 YOU'VE CHOSEN Arslan-MD 』
║ -Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝
╔════════════════════◇
║ 『••• _V𝗶𝘀𝗶𝘁 𝗙𝗼𝗿_H𝗲𝗹𝗽 •••』
║❍ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: youtube.com/@umairahmedyt
║❍ 𝐎𝐰𝐧𝐞𝐫: 923453897509
║❍ 𝐑𝐞𝐩𝐨: https://github.com/Arslan-MD/Arslan_MD 
║❍ 𝐖𝐚𝐆𝗿𝐨𝐮𝐩: https://chat.whatsapp.com/Kgg8V9aATB5IC6eEj04CRX?mode=gi_t
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029Vb7Q0pB6LwHmmwCoAw2L
║❍ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/umairmd
║ ☬ ☬ ☬ ☬
╚═════════════════════╝
𒂀 Enjoy UMAIR-MD


---

Don't Forget To Give Star⭐ To My Repo
______________________________`;
	 await Qr_Code_By_UMAIR_Tech.sendMessage(Qr_Code_By_UMAIR_Tech.user.id,{text:Arslan_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_UMAIR_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					UMAIR_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await UMAIR_MD_QR_CODE()
});
module.exports = router
