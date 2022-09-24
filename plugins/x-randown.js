/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
//https://docs-jojo.herokuapp.com
let handler = async (m, { conn, command, args }) => {
try {
if (command == "comediante") {
let xdnot = await fetchJson(`https://latam-api.vercel.app/api/comedia?apikey=${MyApiKey}`)
conn.sendMessage(m.chat, { text: xdnot.risa_not_1, mentions: [m.sender] }, {quoted: {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "79773452127-1613049930@g.us" } : {})},message: {"videoMessage": { "title":null, "h": `UwU`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `Sinsentido :v`, 'jpegThumbnail': null}}} })
setTimeout( () => {
m.reply(xdnot.risa_not_2 ? xdnot.risa_not_2 : "Mucha comedia 🤡")
}, 4000)
} else if (command == "notif") {
let Notif = await fetchJson(`https://latam-api.vercel.app/api/noti_rand?apikey=${MyApiKey}`)
m.reply(Notif.notificacion)
} else if (command == "tumama") {
let Tumam = await fetchJson(`https://latam-api.vercel.app/api/tumama?apikey=${MyApiKey}`)
m.reply(Tumam.respuesta)
} else if (command == "consejo") {
let rpt = await fetchJson(`https://latam-api.vercel.app/api/rand_aviso?apikey=${MyApiKey}`)
m.reply(rpt.aviso)
} else if (command == "minidatos") {
let datin = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`, {method: 'get'})
m.reply(await traducIr(datin.result))
} else if (command == "fraseamor") {
let simp = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
m.reply(await traducIr(simp.result))
}  else if (command == "minombre") {
if (!args[0]) return m.reply('Y el nombre?')
let asies = await fetchJson(`https://docs-jojo.herokuapp.com/api/artinama?nama=${args[0]}`, {method: 'get'})
m.reply(await traducIr(asies.result))
}
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['comediante', 'notif', 'tumama', 'consejo', 'minidatos', 'fraseamor', 'minombre']
handler.tags = ['random']
handler.command = /^(comediante)|(notif)|(tumama)|(consejo)|(minidatos)|(fraseamor)|(minombre)$/i
handler.limit = true

export default handler