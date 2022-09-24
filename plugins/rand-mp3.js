/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import { toAudio } from '../lib/converter.js'
import * as fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let ranAudi = await fetchJson(`https://latam-api.vercel.app/api/rand_audio?apikey=${MyApiKey}`)
conn.sendMessage(m.chat, {audio: {url: ranAudi.audio}, contextInfo:{"externalAdReply":{"title": `${name} 🎧`, mediaType: 2, "thumbnailUrl": 'https://github.com/NeKosmic/NK-BOT/raw/main/multimedia/imagenes/DjbotHD.jpg',"previewType": "VIDEO","mediaUrl": `https://youtu.be/Tk9Pitk1_oM`}}, fileName: `DjNK.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['djbot']
handler.tags = ['random']
handler.command = /^(djbot)$/i

export default handler