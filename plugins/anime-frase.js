/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn }) => { 
	let usimg = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
try {
var rpt = await fetchJson(`https://latam-api.vercel.app/api/ani_frases?apikey=${MyApiKey}`)
conn.relayMessage(m.chat, {extendedTextMessage:{text: `\n🎴 Anime : ${rpt.anime}\n🀄 Personaje : ${rpt.personaje}\n🔖 Frase : ${rpt.frase}\n`, ...{ contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: usimg, sourceUrl: 'https://vm.tiktok.com/ZMF1heqbV/' }}}
}}, {})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['anifrase']
handler.tags = ['animeuwu']
handler.command = /^(anifrase)$/i
handler.limit = true

export default handler