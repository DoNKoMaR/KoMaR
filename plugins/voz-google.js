/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

let defaultLang = MultiNK.Lengua()
let handler = async (m, { conn, args, command, text }) => {
	if (text.length > 600) return m.reply(`Maximo de caracteres 600`)
  let lang = args[0]
  let texto = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    texto = args.join(' ')
  }
  if (!texto && m.quoted?.text) texto = m.quoted.text
  if (!texto) return conn.sendButton(m.chat,`*[ ! ] Por favor, despues de usar el comando ${command}, tiene que agregarle el prefijo del idioma en el cual desea escuchar el audio* \n`,`Ejemplo de uso:\n\n${Prefijo + command} es hola\n\n-> "es" = prefijo español\n--> "hola" = texto\n`,NombreDelBot,[`*[ idiomas disponibles ]* :${String.fromCharCode(8206).repeat(850)}
\`\`\`
  'af': 'Africano',
  'sq': 'Albanes',
  'ar': 'Arabico',
  'hy': 'Armenio',
  'ca': 'Catalan',
  'zh': 'Chino',
  'zh-cn': 'Chino (Mandarin/China)',
  'zh-tw': 'Chino (Mandarin/Taiwanes)',
  'zh-yue': 'Chino (Cantones)',
  'hr': 'Croata',
  'cs': 'Checo',
  'da': 'Danes',
  'nl': 'Holandes',
  'en': 'Ingles',
  'en-au': 'Ingles (Australia)',
  'en-uk': 'Ingles (Reino unido)',
  'en-us': 'Ingles (Estados unidos)',
  'eo': 'Esperanto',
  'fi': 'Finlandes',
  'fr': 'Frances',
  'de': 'Aleman',
  'el': 'Griego',
  'ht': 'Criollo haitiano',
  'hi': 'Hindio',
  'hu': 'Hungaro',
  'is': 'islandes',
  'id': 'Indonesio',
  'it': 'Italiano',
  'ja': 'Japones',
  'ko': 'Koreano',
  'la': 'Latino',
  'lv': 'Leton',
  'mk': 'Macedonio',
  'no': 'Noruego',
  'pl': 'Polaco',
  'pt': 'Portugues',
  'pt-br': 'Portugues (Brazil)',
  'ro': 'Rumano',
  'ru': 'Ruso',
  'sr': 'Serbio',
  'sk': 'Slovaco',
  'es': 'Español',
  'es-es': 'Español (España)',
  'es-us': 'Español (Estados Unidos)',
  'sw': 'Swahili',
  'sv': 'Sueco',
  'ta': 'Tamil',
  'th': 'Tailandes',
  'tr': 'Turco',
  'vi': 'Vietnamita',
  'cy': 'Gales'
\`\`\``,`</bromita>`],m)
  let res
  try { res = await tts(texto, lang) }
  catch (e) {
    m.reply(MultiNK.Error0())
    texto = args.join(' ')
    res = await tts(texto, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'audiotxt.opus', null, m, true)
  }
}

handler.help = ['voz <lenguaje> <texto>']
handler.tags = ['herramienta']
handler.command = /^(voz|gtts|tts|vos)$/i
handler.limit = true

export default handler

function tts(texto, lang = defaultLang) {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, texto, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
