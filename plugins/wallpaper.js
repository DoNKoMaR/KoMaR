/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn, text, command, args }) => {
        if (!args[0]) return m.reply(`Cual es su búsqueda?`)
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Bsqd(name))
	await msj
try {
var wpp = await fetchJson(`https://latam-api.vercel.app/api/wpp?apikey=${MyApiKey}&q=${enc}`)
if (!wpp.imagen) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: wpp.imagen},caption:`┏━⊱ Wallpaper : ${text}\n┗⊱  Solicitada por : @${etiqueta.replace(/@.+/, '')}`,mentions:[m.sender]},{quoted:{key:{fromMe:!1,"participant":"0@s.whatsapp.net","remoteJid":"79773452127-1604595598@g.us"},"message":{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync('./multimedia/imagenes/mylogo.jpg'),surface:200,message:`${name} => ${text}`,orderTitle:'Matt_M',sellerJid:'0@s.whatsapp.net'}}}})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['wallpaper'].map(v => v + ' <busqueda>')
handler.tags = ['busqueda']
handler.command = /^(wallpaper|wpp|fondo)$/i
handler.limit = true

export default handler
