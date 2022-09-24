/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let defaultLang = MultiNK.Lengua()
let handler = async (m, { args, command }) => {
if (!args || !args[0]) return m.reply(`Envie o responda un texto con el comando ${Prefijo+command} <idioma> [texto], ejemplo:\n\n${Prefijo+command} es Hello World\n`)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {
var itr = await fetchJson(`https://latam-api.vercel.app/api/traductor?apikey=${MyApiKey}&idioma1=${lang?lang:defaultLang}&texto1=${text ? text  : "-"}`)
m.reply(itr.traducido)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['traducir'].map(v => v + ' <idioma> [texto]')
handler.tags = ['herramienta']
handler.command = /^(traducir|tr|translate)$/i

export default handler