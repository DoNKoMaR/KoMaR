/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, groupMetadata }) => { 
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let datagif = await fetchJson(`https://latam-api.vercel.app/api/randgif_anime?apikey=${MyApiKey}`)
let stiker = await sticker(false, datagif.gif, groupMetadata.subject, NombreDelBot)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['snime']
handler.tags = ['animeuwu']
handler.command = /^(snime)$/i

export default handler
