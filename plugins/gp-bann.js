import db from '../lib/database.js'

let handler = async (m) => {
    db.data.chats[m.chat].isBanned = true
    m.reply('Chat baneado correctamente ✓')
}

handler.help = ['banchat']
handler.tags = ['propietario']
handler.command = /^(banchat|chatban)$/i

handler.owner = true

export default handler