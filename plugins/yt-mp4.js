/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command, text, args }) => {
	if (!text) return m.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo + command} https://youtu.be/cNgyuHtBBW8`)
	if(!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply('*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n')
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
    let ytm4 = encodeURIComponent(text)
try {
	let apiytdl = await fetchJson(`https://latam-api.vercel.app/api/ytmp4_2?apikey=${MyApiKey}&q=${ytm4}`)
	conn.sendMessage(m.chat, { video: {url: apiytdl.descarga}, fileName: `${apiytdl.titulo}.mp4`, mimetype: 'video/mp4', caption: `Titulo: ${apiytdl.titulo}\nTamaño: ${apiytdl.peso}\nExtencion: .mp4`}, { quoted: m }).catch(e => {conn.sendButton(m.chat, `*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`, `Toque el boton para usar otra alternativa`, NombreDelBot, ['[ ♻️ REINTENTAR ]', Prefijo+`ytv ${text}`], m)})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['ytmp4 <link>']
handler.tags = ['servicio']
handler.command = /^(ytmp4)$/i
handler.limit = true

export default handler