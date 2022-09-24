import webp from 'node-webpmux'
import { randomBytes } from 'crypto'
import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text, command }) => {
	if (!text) return m.reply(`Modo de uso:\n\n${Prefijo + command} The life is a party\n`)
    let attexto = encodeURIComponent(text)
    let attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${attexto}`) 
    let stiker = await addExif(attp2, '', `[_>] ${NombreDelBot}\n`) 
    conn.sendMessage(m.chat, {sticker: stiker}, {quoted: m})
}

handler.help = ['attp <texto>']
handler.tags = ['conversor']

handler.command = /^attp$/i
handler.limit = true

export default handler

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
