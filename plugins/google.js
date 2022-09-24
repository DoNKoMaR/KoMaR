let handler = async (m, { conn, text, args }) => {
	if (!args[0]) return m.reply(`Que desea buscar en Google?`)
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Bsqd(name))
	await msj
try {
let gugulB = await fetchJson(`https://latam-api.vercel.app/api/google?apikey=${MyApiKey}&q=${enc}`)
if (!gugulB.busqueda.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: 'https://github.com/NeKosmic/NK-BOT/raw/main/multimedia/imagenes/GugulHD.jpg'},caption:`〘  *GOOGLE* 〙\n_~> Resultados para : ${text}_\n${String.fromCharCode(8206).repeat(850)}
🔖 Titulo: ${gugulB.busqueda.titulo}
📜 Descripcion: ${gugulB.busqueda.descripcion}
⛓️ Url: ${gugulB.busqueda.link}
🖼️ Imagen: ${gugulB.busqueda.imagen}

🔍 ID: ${gugulB.busqueda.id}
🔗 Link: ${gugulB.busqueda.link}
⚡ Titulo: ${gugulB.busqueda.titulo}
✍️ Autor: ${gugulB.busqueda.autor}
⌚ Duracion: ${gugulB.busqueda.duracion}`},{quoted:m})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['google'].map(v => v + ' <busqueda>')
handler.tags = ['busqueda']
handler.command = /^(google)$/i
handler.limit = true

export default handler
