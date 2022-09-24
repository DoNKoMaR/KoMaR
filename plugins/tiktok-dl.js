import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command }) => {
	if(!args[0]) return m.reply('*[ ! ] Y el Link?*')
	if(!isUrl(args[0])) return m.reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo + command} https://vm.tiktok.com/ZMNo7NFT9/`)
	if(!args[0].includes('tiktok.com')) return m.reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo + command} https://vm.tiktok.com/ZMNo7NFT9/`)
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) return m.reply(MultiNK.Error0())
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
🔥 By ${nickname}${description ? `\n📜*Descripción:* ${description}` : ''}
`.trim(), m)
}

handler.help = ['tiktokdl'].map(v => v + ' <link>')
handler.tags = ['servicio']
handler.command = /^(tiktokdl)$/i
handler.limit = true

export default handler