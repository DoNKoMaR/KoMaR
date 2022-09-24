/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn, text, args }) => {
	if (!args[0]) return m.reply(`Que desea buscar en pinterest?`)
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Bsqd(name))
	await msj
try {
let pin = await fetchJson(`https://latam-api.vercel.app/api/pinterest?apikey=${MyApiKey}&q=${enc}`)
if (!pin.imagen) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: pin.imagen},caption:`*[ PINTEREST-CHAN ] ✓*\n*~> Resultado para* : _${text}_`,mentions:[m.sender]},{quoted:{key:{fromMe:!1,"participant":"0@s.whatsapp.net","remoteJid":"79773452127-1604595598@g.us"},"message":{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync('./multimedia/imagenes/mylogo.jpg'),surface:200,message:`${name} => ${text}`,orderTitle:'Yesenia',sellerJid:'0@s.whatsapp.net'}}}})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['pinterest'].map(v => v + ' <busqueda>')
handler.tags = ['busqueda']
handler.command = /^(pinterest)$/i
handler.limit = true

export default handler
