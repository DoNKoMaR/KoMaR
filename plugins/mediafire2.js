/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn, args }) => { 
	if(!args[0]) return m.reply('*[ ! ] Y el Link?*')
	if(!isUrl(args[0]) && !args[0].includes('https://www.mediafire.com/')) return m.reply('*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_')
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let resm = await fetchJson(`https://latam-api.vercel.app/api/mediafiredl?apikey=${MyApiKey}&q=${args[0]}`)
conn.sendFile(m.chat, resm.descarga, resm.nombre, '', m, null, { mimetype: resm.extension, asDocument: true, jpegThumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg') })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['mediafire2 <Link>']
handler.tags = ['servicio']
handler.command = /^(mediafire2)$/i
handler.limit = true

export default handler
