/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, text, args }) => {
	if (!args[0]) return m.reply(`Cual es su búsqueda en Wikipedia?`)
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Bsqd(name))
	await msj
try {
let res = await fetchJson(`https://latam-api.vercel.app/api/wikipedia?apikey=${MyApiKey}&q=${enc}`)
if (!res.datos.wikinfo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: res.datos.miniatura},caption:`|| *WIKIPEDIA* ||\n_~> Resultados para : ${text}_\n${String.fromCharCode(8206).repeat(850)}\n${res.datos.wikinfo}`},{quoted:m})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['wikipedia'].map(v => v + ' <busqueda>')
handler.tags = ['busqueda']
handler.command = /^(wikipedia)$/i
handler.limit = true

export default handler
