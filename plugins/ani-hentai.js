/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn }) => {
	let name = await conn.getName(m.sender)
	let eMoj = ['🥵🔥', '😎👌', '😈🤙', '😏', '🌝🤌']
    const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
var dataimg = await fetchJson(`https://latam-api.vercel.app/api/hentai?apikey=${MyApiKey}`)
conn.sendMessage(m.chat, { image: { url: dataimg.hidrogeno }, jpegThumbnail:fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), caption: eMoj[Math.floor(Math.random() * eMoj.length)] }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['hentai']
handler.tags = ['']
handler.command = /^(hentai)$/i
handler.limit = 2

export default handler
