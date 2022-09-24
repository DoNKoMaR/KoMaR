/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo + command} ideas en 5 minutos`)
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Bsqd(name))
	await mcarga
	let playtext = encodeURIComponent(text)
try {
	let busqueda = await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${playtext}`)
	let mynum = pickRandom([0, 1, 2])
	let datayt = busqueda.resultados[mynum]
	let nextbut = [{buttonId: `${Prefijo}ytmp3 ${datayt.url}`, buttonText: {displayText: "[ AUDIO MP3 🔊 ]"}, type: 1}, 
	{buttonId: `${Prefijo}ytmp4 ${datayt.url}`, buttonText: {displayText: "[ VIDEO MP4 🎞️ ]"}, type: 1}]
	let playboton = {
image: { url: datayt.imagen },
caption: `
✍️ Titulo : ${datayt.titulo}
⚡ Autor : ${datayt.autor}
⏰ Duracion : ${datayt.duracion}
👀 Vistas : ${datayt.vistas}
📆 Fecha de subida : ${datayt.f_carga}
📺 Canal : ${datayt.canal}
📃 Descripcion : ${datayt.descripcion}
🧬 ID : ${datayt.id}`.trim(),
footer: NombreDelBot+` 🔥`,
buttons: nextbut,
headerType: 4
}
await conn.sendMessage(m.chat, playboton, { quoted: m })
reacMoji(m.chat, conn, '📥', m)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['play2 <texto>']
handler.tags = ['busqueda']
handler.command = /^(play2)$/i
handler.limit = true

export default handler