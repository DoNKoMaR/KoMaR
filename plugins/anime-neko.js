/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn, command }) => {
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
var dataimg = await fetchJson(`https://latam-api.vercel.app/api/nekonime1?apikey=${MyApiKey}`)
conn.sendMessage(m.chat, { image: {url: dataimg.imagen}, caption: `┏━⊱ Imagen : ${command}\n┗⊱ Solicitada por : @${etiqueta.replace(/@.+/, '')}`, mentions: [etiqueta] }, { quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "79773452127-1604595598@g.us"}, "message": {orderMessage: {itemCount: 737,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/mylogo.jpg'), surface: 200, message: `${name} [_>] ${command}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['neko']
handler.tags = ['animeuwu']
handler.command = /^(neko)$/i
handler.limit = true

export default handler