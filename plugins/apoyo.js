import { generateWAMessageFromContent, generateWAMessage } from '@adiwajshing/baileys'
import * as fs from 'fs'

let handler = async (m, { conn }) => {
let more = String.fromCharCode(8206)
let masss = more.repeat(850)
await conn.relayMessage(m.chat,{requestPaymentMessage:{noteMessage:{extendedTextMessage:{text:`💻 *Redes sociales* 📲\n\n${masss + TusRedesSociales}`,currencyCodeIso4217:'PEN',requestFrom:'0@s.whatsapp.net',expiryTimestamp:8600,amount:10000,background:fs.readFileSync('./multimedia/imagenes/thx.jpg')}}}},{})

reacMoji(m.chat, conn, '❤️', m)
}

handler.help = ['apoyo']
handler.tags = ['casual']
handler.command = /^(apoyo|apoyar|donar|donasi|dono)$/i
handler.exp = 100 //:V

export default handler
