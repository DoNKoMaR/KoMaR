import db from '../lib/database.js'

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, args }) => {
    if (!args[0]) return m.reply(`Y el enlace de WhatsApp?`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('[ ! ] Error, El enlace no funciona o es inválido')
    let gpData = await conn.groupGetInviteInfo(code).catch(e => {})
    let minUs = gpData.participants.length
    if (minUs <= MinimoDeUsuarios) return m.reply(`[ ! ] La cantidad mínima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`)
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`${NombreDelBot} se unió al grupo ${res} con éxito \n${expired ? `Durante ${expired} Hora(1-Hora)` : ''}`)
    let chats = db.data.chats[res]
    if (!chats) chats = db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60
}

handler.help = ['unete <Enlace de grupo>']
handler.tags = ['premium', 'propietario']
handler.command = /^(unete|entrabot|join)$/i
handler.limit = 10
handler.premium = false

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
