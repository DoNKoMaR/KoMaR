/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn }) => {
	let name = await conn.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
    const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let zlatam = await fetchJson(`https://latam-api.vercel.app/api/xd_img?apikey=${MyApiKey}`)
conn.sendMessage(m.chat, { image: { url: zlatam.imagen }, jpegThumbnail:fs.readFileSync('./multimedia/imagenes/logo.jpg'), caption: `ª` }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['xd']
handler.tags = ['random']
handler.command = /^(xd)$/i
handler.limit = true

export default handler
