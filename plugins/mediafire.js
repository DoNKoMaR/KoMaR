import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, command }) => {
    if(!args[0]) return m.reply('*[ ! ] Y el Link?*')
    if(!isUrl(args[0]) && !args[0].includes('https://www.mediafire.com/')) return m.reply('*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_')
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Nombre:* ${filename}
*Tamaño:* ${filesizeH}
*Extensión:* ${ext}
*Fecha de subida:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}

handler.help = ['mediafire'].map(v => v + ' <link>')
handler.tags = ['servicio']
handler.command = /^(mediafire)$/i
handler.limit = true

export default handler
