import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, args, text, command, groupMetadata }) => {
	let [teks1, teks2] = text.split`|`
	if (!teks1) return m.reply(`Agregue el nombre del paquete y nombre del autor, ejemplo: \n\n${Prefijo + command} paquete|autor\n`)
	if (!teks2) return m.reply(`Agregue el nombre del paquete y nombre del autor ó viceversa, ejemplo: \n\n${Prefijo + command} paquete|autor\n`)
	let sname = await conn.getName(m.sender)
	let sfecha = moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')
	let name = await conn.getName(m.sender)
	let stiker = false
  try{let q=m.quoted?m.quoted:m
let mime=(q.msg||q).mimetype||q.mediaType||''
if(/webp|image|video/g.test(mime)){if(/video/g.test(mime))if((q.msg||q).seconds>8)return m.reply(`*[ ! ] Máxima duración de vídeo son 7 segundos!*`)
let img=await q.download?.()
if(!img)return m.reply(`*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo + command}*\n_NOTA : duracion de video 1 a 10 segundos máximo_ ✓`)
m.reply(MultiNK.Proces(name))
let out
try{stiker=await sticker(img,!1,teks1,teks2)
reacMoji(m.chat,conn,'⚙️',m)}catch(e){console.error(e)}finally{if(!stiker){if(/webp/g.test(mime))out=await webp2png(img)
else if(/image/g.test(mime))out=await uploadImage(img)
else if(/video/g.test(mime))out=await uploadFile(img)
if(typeof out!=='string')out=await uploadImage(img)
stiker=await sticker(!1,out,teks1,teks2)}}}else if(args[0]){if(isUrl(args[0]))stiker=await sticker(!1,args[0],teks1,teks2)
else return m.reply('[ ! ] Url inválido, prueba con otro ;3')}}catch(e){console.error(e)
if(!stiker)stiker=e}finally{if(stiker)conn.sendFile(m.chat,stiker,'sticker.webp','',m)
else return m.reply('[ ! ] Error')}
}
handler.help = ['wm [multimedia/url]']
handler.tags = ['conversor', 'herramienta']
handler.command = /^(wm|stickerwm|swm|stickergifwm|sgifwm)$/i
handler.limit = true

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
