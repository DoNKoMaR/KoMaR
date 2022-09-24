let handler = async (m, { conn, args }) => {
	if (!m.quoted) return m.reply('[ ! ] Responda un sticker!')
    if (/sticker/.test(m.quoted.mtype)) {
	await conn.relayMessage(m.chat,{requestPaymentMessage:{currencyCodeIso4217:'USD',amount1000:priceRand(10,10000),noteMessage:{stickerMessage:Object.assign({},m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage)}}},{})
	reacMoji(m.chat, conn, '⚙️', m)
	}
}

handler.help = ['spago']
handler.tags = ['conversor']
handler.command = /^(spago|sprecio|scosto)$/i

export default handler

function priceRand(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
