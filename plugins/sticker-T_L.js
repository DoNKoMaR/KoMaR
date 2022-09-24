import { sticker } from '../lib/sticker.js'
import { stickerLine, stickerTelegram } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    // TODO: add stickerly
    const isTele = /tele/i.test(command)
    if (!args[0]) return m.reply(`*Este comando es para obtener stickers de ${isTele ? 'Telegram' : 'Line'}*\n\nEjemplo de uso:\n${usedPrefix + command} anime`)
    const json = await (isTele ? stickerTelegram : stickerLine)(args[0])
    m.reply(`
*Resultados encontrados para ~${args[0]}~, total:* ${(json[0]?.stickers || json).length}
_Enviando stickers..._
`.trim())
    for (let data of (json[0]?.stickers || json)) {
        const stiker = await sticker(false, data.sticker || data, ``, `\n< ${NombreDelBot} >\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[ NeKosmic ]`)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m).catch(console.error)
        await delay(1500)
    }

}
handler.help = ['telesticker <buscar>', 'linesticker <buscar>']
handler.tags = ['conversor']
handler.command = /^(telesticker)|(linesticker)$/i

handler.limit = 5

export default handler

const delay = time => new Promise(res => setTimeout(res, time))