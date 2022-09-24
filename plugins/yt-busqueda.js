/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, text, command }) => {
	if (!text) return m.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo + command} cuanto es 1 + 1`)
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Bsqd(name))
	await mcarga
	let ytstext = encodeURIComponent(text)
try {
	let myapiyts = await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${ytstext}`)
	let teks = '*[ > ] Resultados en Youtube para:* _'+text+'_\n\n'
	let no = 1
	for (let i of myapiyts.resultados) {
		teks += `🔖 Titulo: ${i.titulo}\n🧬 ID: ${i.id}\n⛓️ URL: ${i.url}\n🗜️ Tipo: ${i.tipo}\n🖼️ Miniatura: ${i.imagen}\n⌚ Duracion: ${i.duracion}\n📜 Descripción: ${i.descripcion}\n📆 Fecha de subida: ${i.f_carga}\n👀 Vistas: ${i.vistas}\n||\n⚡Autor: ${i.autor}\n📺 Canal: ${i.canal}\n\n*——————————*\n\n`
	}
m.reply(teks)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['ytbuscar <texto>']
handler.tags = ['busqueda']
handler.command = /^(ytbuscar|ytsearch|yts)$/i

export default handler