import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args }) => {
	if (!args[0]) return m.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo + command} https://youtu.be/ed-6VSF-GGc`)
	if(!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply('*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n')
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga 
	try {
		let qu = args[1] || '360'
		let q = qu + 'p' 
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const titulodl = await yt.title
		const size = await yt.video[q].fileSizeH 
		if (size.split('MB')[0] >= 50.00) return m.reply('[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v')
		conn.sendMessage(m.chat, { video: {url: dl_url}, fileName: `${titulodl}.mp4`, mimetype: 'video/mp4', caption: `Titulo: ${titulodl}\nTamaño: ${size}\nExtencion: .mp4`}, { quoted: m }) 
		} catch {
			await conn.reply(m.chat, MultiNK.Error1(), m)
}
}

handler.help = ['ytvbochi <link>']
handler.tags = ['servicio']
handler.command = /^(ytvbochi)$/i

export default handler
