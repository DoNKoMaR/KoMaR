import macuin from 'performance-now'
import * as fs from 'fs'

let handler = async (m, { conn, command }) => {
const timesmpp=macuin()
const latensi=macuin()-timesmpp
if (command == "wlcrebotepin") {
conn.sendMessage(m.chat,{text:pickRandom(['Pierde la partida*\nFong š','š Pong!!! š','š Pong!!! š','Pong š','Pong š','Pong š','Pong š','Responde con un golpe a 160 kmh*\nPong š','Pong š','Pong š','Le da un golpe en la cabeza*\nPong š','Pong š','Pong š','Le rompe el craneo*\nPong!!!š','Pong š','Pong š','Pong š','Pong š','Le gana la partida*\nš Pong!!! š','Lo mata*\nPong!!! ššš'])+`\n\nVelocidad de respuesta : ${latensi.toFixed(4)}MS Milisegundos\n`},{quoted:m})
} else if (command == "wlcadiosdsp") {
conn.sendMessage(m.chat,{audio:fs.readFileSync('./multimedia/sonidos/adiu.m4a'),fileName:`c_va_alv.mp3`,mimetype:'audio/mpeg',ptt:!0},{quoted:m})
}
}

handler.command = /^(wlcrebotepin)|(wlcadiosdsp)$/i

export default handler

