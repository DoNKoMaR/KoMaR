import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('A quien desea banear?')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('[ ! ] Por favor etiquete al usuario que desea banear')
    let users = db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Usuario baneado, ${who} ya no podra usar al bot [ ! ]`, m)
}

handler.help = ['banear @usuario']
handler.tags = ['propietario']
handler.command = /^banear$/i

handler.rowner = true

export default handler
