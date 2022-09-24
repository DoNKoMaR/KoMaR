import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
	let name = await conn.getName(m.sender)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) return m.reply(`Ejemplo de uso : ${Prefijo + command} 🥺+🥵`)
	if (!emoji2) return m.reply(`Ejemplo de uso : ${Prefijo + command} 🥺+🥵`)
    const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
  let emix = anu.results[0].media_formats.png_transparent.url
  let stiker = await sticker(false, emix, '', `\n- ${NombreDelBot} -`)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['emojimix']
handler.tags = ['conversor']
handler.command = /^(emojimix)$/i
handler.limit = true

export default handler
