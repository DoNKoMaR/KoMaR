import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('A quien desea desbanear?')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return m.reply('[ ! ] Por favor etiquete al usuario que desea desbanear')
    let users = db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Usuario desbaneado, ${who} puede volver a usar al bot [✓]`, m)
}

handler.help = ['desbanear @usuario']
handler.tags = ['propietario']
handler.command = /^desbanear$/i
handler.rowner = true

export default handler
