/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    if (!text) return m.reply(`Por favor diga su motivo para irse AFK\nEjemplo de uso : \n${Prefijo}afk iré al baño :v`)
    if (text.length < 10) return m.reply(`[ ! ] El motivo es muy corto`)
    user.afk = + new Date
    user.afkReason = text
    await conn.sendMessage(m.chat, { text: `*Se activo la función AFK exitosamente*\n\n➸ *Usuario*: ${conn.getName(m.sender)}\n➸ *Razon*: ${text}`}, {quoted: m }) 
    reacMoji(m.chat, conn, '💤', m)
}

handler.help = ['afk [razon]']
handler.tags = ['casual']
handler.command = /^afk$/i

export default handler