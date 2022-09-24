/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, text, args }) => {
	if (!args[0]) return m.reply(`Que desea buscar en playstore?`)
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Bsqd(name))
	await msj
try {
let gPlay = await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${enc}`)
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
let trDesc = await traducIr(encodeURI(gPlay.descripcion))
conn.sendMessage(m.chat,{image:{url: gPlay.imagen?gPlay.imagen:'https://github.com/NeKosmic/NK-BOT/raw/main/multimedia/imagenes/GplayHD.jpg'},caption:`🔍 Resultado: ${gPlay.titulo}
🧬 Identificador: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Imagen: ${gPlay.imagen}
✍️ Desarrollador: ${gPlay.desarrollador}
📜 Descripcion: ${trDesc?trDesc:gPlay.descripcion}
💲 Moneda: ${gPlay.moneda}
🎭 Gratis: ${gPlay.gratis}
💸 Precio: ${gPlay.precio}
📈 Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['playstore'].map(v => v + ' <busqueda>')
handler.tags = ['busqueda']
handler.command = /^(playstore)$/i
handler.limit = true

export default handler
