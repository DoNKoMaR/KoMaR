/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = m => m
handler.all = async function(m, { isAdmin, isBotAdmin }) {
	if (!m.isGroup) return !1
	let chat = db.data.chats[m.chat]
	let { limit, banned } = db.data.users[m.sender]
	if (chat.isBanned) return 
	if (banned) return 
	if (limit < 1) return 
	try{var userthumb=await this.profilePictureUrl(m.sender,'image')}catch{var userthumb='https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'}
	let mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
	let rtps1 = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	let rtps2 = m.text.slice(0).trim().split(/ +/).shift().toLowerCase()
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pushname = await this.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
	let reddom = redes[Math.floor(Math.random() * redes.length)]
//Random//
if (rtps1.includes("prefijo?") || (rtps1.includes("Prefijo?"))){
m.reply(`*Por si estas preguntando cual es el prefijo del bot*\n_Prefijo actual para uso de comandos_ : \n\n" *${Prefijo}* "\n`)
}
//
if (rtps2.includes("destraba") || rtps2.includes("Destraba") || rtps2.includes("destrava") || rtps2.includes("Destrava")){
if (isAdmin && !m.isBaileys && !m.fromMe) { this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
} else {
this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
m.limit = 10
}
}
//
if (rtps1.includes("c suicida") || rtps1.includes("C suicida")){
m.reply(`*El suicidio no es una opcion* 😞🤙`)
setTimeout( () => {
m.reply(`_*Es la solución*_ 😎🤝`)
}, 2500)
m.limit = 5
}
if (rtps1.includes("zzz") || rtps1.includes("Zzz")){
m.reply(`*Tienes sueño o anemia?*\n_*Ve al medico y notaras la diferencia ;)*_ `)
m.limit = 5
}
if (rtps1.includes("impostor") || rtps1.includes("Impostor")){
m.reply(`*AmongUs*`)
m.limit = 1
}
if (rtps1.includes("ctm") || rtps1.includes("Ctm")){
m.reply(`*Cuida-Tu-Mundo*`)
m.limit = 5
}
if (rtps1.includes("lptm") || rtps1.includes("Lptm")){
m.reply(`*La-Paja-Te-Mata*`)
m.limit = 1
}
if (rtps1.includes("ptm") || rtps1.includes("Ptm")){
m.reply(`*Pronto-Te-Moriras*`)
m.limit = 5
}

//Insultos al bot :vvv
if (rtps1.includes("puto bot") || (rtps1.includes("Puto bot") || (rtps1.includes("bot puto") || (rtps1.includes("Bot puto") || (rtps1.includes("pinche bot") || (rtps1.includes("Pinche bot") || (rtps1.includes("bot gey") || (rtps1.includes("Bot gey") || (rtps1.includes("bot gay") || (rtps1.includes("Bot gay"))))))))))){
let resrand = pickRandom(["rpt1", "rpt2", "rpt3", "rpt4", "rpt5", "rpt6", "rpt7", "rpt8", "rpt9", "rpt10", "rpt11", "rpt12", "rpt13", "rpt14", "rpt15", "rpt16", "rpt17", "rpt18", "rpt19", "rpt20", "rpt21", "rpt22", "rpt23", "rpt24", "rpt25", "rpt26", "rpt27", "rpt28", "rpt29", "rpt30", "rpt31", "rpt32", "rpt33", "rpt34", "rpt35", "rpt36", "rpt37", "rpt38", "rpt39", "rpt40", "rpt41", "rpt42", "rpt43", "rpt44", "rpt45", "rpt46", "rpt47", "rpt48", "rpt49", "rpt50", "rpt51", "rpt52", "rpt53", "rpt54", "rpt55", "rpt56", "rpt57", "rpt58", "rpt59", "rpt60", "rpt61", "rpt62", "rpt63", "rpt64", "rpt65", "rpt66", "rpt67", "rpt68", "rpt69", "rpt70", "rpt71", "rpt72", "rpt73", "rpt74", "rpt75", "rpt76", "rpt77"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${pushname}: ${m.text}`, 'jpegThumbnail': mylogo}}} })
m.limit = 5
}

//Simp bot gaaa :u
if (rtps1.includes("bot gracias") || (rtps1.includes("Bot gracias") || (rtps1.includes("gracias bot") || (rtps1.includes("Gracias bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} pa servirle mi king nwn`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 5
}
if (rtps1.includes("te amo bot") || (rtps1.includes("Te amo bot") || (rtps1.includes("bot te amo") || (rtps1.includes("Bot te amo"))))){
let resrand = pickRandom(["love1", "love2", "love3", "love4", "love5", "love6"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${pushname} <3`,jpegThumbnail: mylogo}}} })
m.limit = 5
}

//Si 🧐//
if (rtps2.includes("uwu")){
let resrand = pickRandom(["cringe1", "cringe2", "cringe3", "cringe4", "cringe5"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}}, { quoted: m } )
m.limit = 2
}
if (rtps2.includes("owo")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/owobot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.startsWith("awa")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/awabot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("ewe")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/ewebot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("unu")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/unubot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7v7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7v7bot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7w7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7w7bot.webp"}}, { quoted: m } )
m.limit = 1
}
if (rtps2.includes("7u7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7u7bot.webp"}}, { quoted: m } )
m.limit = 1
}

//Fuertes insultos :v
if (rtps2.includes("tonto")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)
m.limit = 1
}
if (rtps2.includes("bobo")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)
m.limit = 1
}
if (rtps2.includes("papanatas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)
m.limit = 1
}
if (rtps2.includes("perseve")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)
m.limit = 1
}
if (rtps2.includes("pelele")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)
m.limit = 1
}
if (rtps2.includes("pamplinas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
m.limit = 1
}
if (rtps2.includes("chispas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
m.limit = 1
}

//fakemsj - no es real . _.
if (rtps1.includes("pasen porno") || (rtps1.includes("Pasen porno") || (rtps1.includes("pasen xxx") || (rtps1.includes("Pasen xxx"))))){
this.sendMessage(m.chat, { text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙\n*${pushname}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "51995386439-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg'), surface: 200, message: `Usuario: ${pushname}\nNumero: ${etiqueta}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })
m.limit = 10
}
//God :v
if (rtps2.includes("tesla")){
this.sendMessage(m.chat, {sticker: fs.readFileSync('./multimedia/misstks/teslagod.webp'), mentions: [m.sender] }, { quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Nikola Tesla:\n10-07-1856\n07-01-1943`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')}}} } )
}
return !0
}

export default handler
