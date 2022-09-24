/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply(`*[ ! ] Ingrese un titulo/nombre/apodo con el cual se actualizará el asunto del grupo actual*`)
if (text.length >= 26) return m.reply(`*[ ! ] máximo de carácteres es 25*`)
await conn.groupUpdateSubject(m.chat, text)
reacMoji(m.chat, conn, '✍️', m)
}

handler.help = ['gpname <texto>']
handler.tags = ['grupos', 'admins']
handler.command = /^(gpname|namegp|setname)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
