/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import { generateWAMessageFromContent, WAProto } from "@adiwajshing/baileys"
import moment from 'moment-timezone'

// TODO:
// const data = {
//   user: [{
//     name: 'autolevelup',
//     isEnable: true
//   }],
//   chat: [{
//     name: 'welcome',
//     isEnable: true,
//     rules: [{
//     }]
//   }]
// }
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /encender|1/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let bot = db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(m.sender)
  let nwn = [`Hola`, `Wenas`, `Que tal`, `Hi`, `Hello`, `Olá`, `Namaste`, `Hey!`, `Aloha`, `Konnichi wa`, `Mi king`, `Que hay`, `Como estas`, `Oi`, `Joder Buenas`]
  let uwu = nwn[Math.floor(Math.random() * (nwn.length))]
let sections = [{
	title: "[ ⬇️ BIENVENIDA AUTOMÁTICA ]",
	rows: [{
			title: "[ 🛬 Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}encender bienvenida`
		},
		{
			title: "[ 🛫 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}apagar bienvenida`
		}
	]
},
{
	title: "[ ⬇️ DETECCIÓN ]",
	rows: [{
			title: "[ 🌕 Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}encender deteccion`
		},
		{
			title: "[ 🌑 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ́ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}apagar deteccion`
		}
	]
},
{
	title: "[ ⬇️ ANTI - ELIMINADO ]",
	rows: [{
			title: "[ ♻️ Activar ]",
			description: "~ᵀᵒᵈᵒ ᵐᵉⁿˢᵃʲᵉ ᵉˡᶦᵐᶦⁿᵃᵈᵒ ˢᵉʳᵃ́ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${usedPrefix}encender antidelete`
		},
		{
			title: "[ 🗑️ Desactivar ]",
			description: "~ᴸᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ ⁿᵒ ˢᵉʳᵃ́ⁿ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒˢ~",
			rowId: `${usedPrefix}encender delete`
		}
	]
},
{
	title: "[ ⬇️ USAR - DOCUMENTOS ]",
	rows: [{
			title: "[ 🗃️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃʳᵃ́ ᵉˡ ᵘˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",
			rowId: `${usedPrefix}encender document`
		},
		{
			title: "[ 🗳️ Desactivar ]",
			description: "~ᵁˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",
			rowId: `${usedPrefix}apagar document`
		}
	]
},
{
	title: "[ ⬇️ MODO DE USO ]",
	rows: [{
			title: "[ 🏬 Público ]",
			description: "~ᴹᵒᵈᵒ ᵖᵘᵇˡᶦᶜᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
			rowId: `${usedPrefix}encender publico`
		},
		{
			title: "[ 🏡 Privado ]",
			description: "~ᴹᵒᵈᵒ ᵖʳᶦᵛᵃᵈᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ˢᵒˡᵒ ᵉˡ ᵈᵘᵉⁿ̃ᵒ ᵈᵉˡ ᵇᵒᵗ ᵖᵒᵈʳᵃ ᵘˢᵃʳˡᵒ~",
			rowId: `${usedPrefix}apagar publico`
		}
	]
},
{
	title: "[ ⬇️ ANTI - EXTRANJEROS ]",
	rows: [{
			title: "[ 🏳️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ~\nᴸᵒˢ ⁿᵘ́ᵐᵉʳᵒˢ ᑫᵘᵉ ᶜᵒᵐᶦᵉⁿᶻᵉⁿ ᶜᵒⁿ +"+PaisPrefix+" ⁿᵒ ˢᵉʳᵃ́ⁿ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ",
			rowId: `${usedPrefix}encender antiextranjeros`
		},
		{
			title: "[ 🏴 Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᴬⁿᵗᶦᵉˢᵗʳᵃⁿʲᵉʳᵒˢ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}apagar antiextranjeros`
		}
	]
},
{
	title: "[ ⬇️ ANTI - FAKES 1 ]",
	rows: [{
			title: "[ 🛡️ Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹~",
			rowId: `${usedPrefix}encender antifake1`
		},
		{
			title: "[ ⚰️ Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}apagar antifake1`
		}
	]
},
{
	title: "[ ⬇️ ANTI - FAKES 2 ]",
	rows: [{
			title: "[ 🛡️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ~",
			rowId: `${usedPrefix}encender antifake2`
		},
		{
			title: "[ ⚰️ Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}apagar antifake2`
		}
	]
},
{
	title: "[ ⬇️ ANTI - LINK ]",
	rows: [{
			title: "[ 🗡️ Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉ ᵘⁿ ᵉⁿˡᵃᶜᵉ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${usedPrefix}encender antilink`
		},
		{
			title: "[ 😴 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ᵉⁿˡᵃᶜᵉˢ~",
			rowId: `${usedPrefix}apagar antilink`
		}
	]
},
{
	title: "[ ⬇️ ANTI - LINK 2 ]",
	rows: [{
			title: "[ 🗡️ Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
			rowId: `${usedPrefix}encender antilink2`
		},
		{
			title: "[ 😴 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
			rowId: `${usedPrefix}apagar antilink2`
		}
	]
},
{
	title: "[ ⬇️ ANTI - VER UNA VEZ ]",
	rows: [{
			title: "[ 🥤 Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ʳᵉᶜᵘᵖᵉʳᵃʳᵃ́ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵈᵉ ᵘⁿᵃ ˢᵒˡᵃ ᵛᶦˢᵗᵃ~",
			rowId: `${usedPrefix}encender antiviewonce`
		},
		{
			title: "[ 🧊 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ́ ʳᵉᶜᵘᵖᵉʳᵃʳᵃ́ⁿ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵈᵉ ᵘⁿᵃ ˢᵒˡᵃ ᵛᶦˢᵗᵃ~",
			rowId: `${usedPrefix}apagar antiviewonce`
		}
	]
},
{
	title: "[ ⬇️ AUTO - NIVELEAR ]",
	rows: [{
			title: "[ 👑 Activar ]",
			description: "~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${usedPrefix}encender autolevelup`
		},
		{
			title: "[ 🎓 Desactivar ]",
			description: "~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ʸᵃ ⁿᵒ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ~",
			rowId: `${usedPrefix}apagar autolevelup`
		}
	]
},
{
	title: "[ ⬇️ MODO RESTRINGIDO ]",
	rows: [{
			title: "[ 🌚 Activado ]",
			description: "~ᴬᶜᵗᶦᵛᵃ ˡᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵍʳᵘᵖᵒˢ⁽ᴺᵒ ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
			rowId: `${usedPrefix}encender restringir`
		},
		{
			title: "[ 🌝 Desactivado ]",
			description: "~ᴬᶜᶜᶦᵒⁿᵉˢ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ʸ ᵃᵍʳᵉᵍᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵃ⁽ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
			rowId: `${usedPrefix}apagar restringir`
		}
	]
},
{
	title: "[ ⬇️ MODO SIN BOT ]",
	rows: [{
			title: "[ 🙈 Activar ]",
			description: "~ˢᵒˡᵒ ᶦᵐᵖʳᶦᵐᵉ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ʳᵉᶜᶦᵇᶦᵈᵒˢ ʸ ᵃᵍʳᵉᵍᵃ ᵘˢᵘᵃʳᶦᵒˢ ᵃ ˡᵃ ᵇᵃˢᵉ ᵈᵉ ᵈᵃᵗᵒˢ~",
			rowId: `${usedPrefix}encender atender`
		},
		{
			title: "[ 🙉 Desactivar ]",
			description: "~ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᶜᵘᵐᵖˡᶦʳ ᶜᵒⁿ ˡᵃˢ ᶠᵘⁿᶜᶦᵒⁿᵉˢ ˢᵒˡᶦᶜᶦᵗᵃᵈᵃˢ~",
			rowId: `${usedPrefix}apagar atender`
		}
	]
},
{
	title: "[ ⬇️ AUTO - LEER ]",
	rows: [{
			title: "[ 🤓 Leer ]",
			description: "~ᴱˡ ᵇᵒᵗ ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᵐᵃʳᶜᵃʳ ˡᵒˢ ᶜʰᵃᵗˢ ᶜᵒᵐᵒ ˡᵉᶦ́ᵈᵒˢ~",
			rowId: `${usedPrefix}encender autoleer`
		},
		{
			title: "[ 😵 No-Leer ]",
			description: "~ᴱˡ ᵇᵒᵗ ⁿᵒ ˡᵉᵉʳᵃ́ ˡᵒˢ ᶜʰᵃᵗˢ~",
			rowId: `${usedPrefix}apagar autoleer`
		}
	]
},
{
	title: "[ ⬇️ ANTI - PRIVADO ]",
	rows: [{
			title: "[ 💔 Activar ]",
			description: "~ᴬʰᵒʳᵃ ᵗᵒᵈᵒ ᵃᑫᵘᵉˡ ᑫᵘᵉ ʰᵃᵇˡᵉ ᵃˡ ᵇᵒᵗ ᵖᵒʳ ᵖʳᶦᵛᵃᵈᵒ ˢᵉʳᵃ ᵇˡᵒᑫᵘᵉᵃᵈᵒ~",
			rowId: `${usedPrefix}encender noprivado`
		},
		{
			title: "[ ❤️ Desactivar ]",
			description: "~ᴹᵒᵈᵒ ᴬⁿᵗᶦ⁻ᴾʳᶦᵛᵃᵈᵒ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
			rowId: `${usedPrefix}apagar noprivado`
		}
	]
},
{
	title: "[ ⬇️ ANTI - TRABA ]",
	rows: [{
			title: "[ 🐸 Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ~",
			rowId: `${usedPrefix}encender antitraba`
		},
		{
			title: "[ 👾 Desactivar ]",
			description: "~ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
			rowId: `${usedPrefix}apagar antitraba`
		}
	]
},
{
	title: "[ ⬇️ CHAT - BOT ]",
	rows: [{
			title: "[ 🗣️ Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ~",
			rowId: `${usedPrefix}encender chatbot`
		},
		{
			title: "[ 👤 Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ~",
			rowId: `${usedPrefix}apagar chatbot`
		}
	]
}, ]

  switch (type) {
    case 'bienvenida': case 'wlc': case 'welcome': {
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      }
      break
    case 'deteccion': {
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      }      
      break
    case 'delete': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      }
      break
    case 'antidelete': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      }
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    case 'document': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.useDocument = isEnable
      }
      break
    case 'publico': case 'public': {
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      }
      break
    case 'antiextranjeros': {
      if (m.isGroup) {
        if (!isOwner) {
        global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.estranjerosnot = isEnable
      }
      break
    case 'antifake1': {
      if (m.isGroup) {
        if (!isOwner) {
        global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.antifake1 = isEnable
      }
      break
    case 'antifake2': {
      if (m.isGroup) {
        if (!isOwner) {
        global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.antifake2 = isEnable
      }
      break
    case 'antilink': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      }
      break
      case 'antilink2': {
        if (m.isGroup) { 
      	if (!(isAdmin || isOwner)) { 
      	  global.dfail('admin', m, conn)
            throw false 
          }
      }
      chat.antiLink2 = isEnable 
      }
      break
      case 'antiviewonce': { 
        if (m.isGroup) { 
        	if (!(isAdmin || isOwner)) { 
      	    global.dfail('admin', m, conn)
              throw false
            }
      }
      chat.antiviewonce = isEnable 
      }
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    case 'autolevelup': {
      isUser = true
      user.autolevelup = isEnable
      }
      break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restringir': case 'restrict': {
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      }
      break
    case 'atender': case 'nyimak': {
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      }
      break
    case 'autoleer': case 'autoread': {
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      }
      break
    case 'pconly': case 'privateonly': {
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      }
      break
    case 'gconly': case 'grouponly': {
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      }
      break
    case 'noprivado': {
      isAll = true
      if (!isROwner) { 
      	global.dfail('rowner', m, conn)
      throw false
      }
      bot.antiPrivado = isEnable
      }
      break
    case 'swonly': case 'statusonly': {
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      }
      break
    case 'getmsg': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      }
      break
    case 'antitraba': case 'antivirtex': {
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiTraba = isEnable
      }
      break
    case 'chatbot': case 'simi': {
      if (m.isGroup) {
        if (!isOwner) {
        global.dfail('owner', m, conn)
          throw false
        }
      }
      chat.simi = isEnable
      }
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: '┗⊱ Aqui tiene la lista de opciones :3', footer: '\n'+NombreDelBot, title: `\n┏━━⊱「 ${uwu} ${name}! 」`, buttonText: " Seleccione aqui ✓ ", sections }, { quoted: {key:{fromMe:!1,participant:`0@s.whatsapp.net`,...(m.chat?{remoteJid:"17608914335@s.whatsapp.net"}:{})},message:{"productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","jpegThumbnail":fs.readFileSync('./multimedia/imagenes/mylogo.jpg')},"title":Propietario,"description":"[ Nekosmic-BOT ]","currencyCode":"PEN","priceAmount1000":"18000","retailerId":"Ghost","productImageCount":1},"businessOwnerJid":`0@s.whatsapp.net`}}} })
      throw false
  }
  await conn.sendMessage(m.chat, { text: `\n@${etiqueta.replace(/@.+/, '')} ${isEnable ? 'activó' : 'desactivó'} *${type}* exitosamente ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}\n`, mentions: [m.sender] }, {ephemeralExpiration: 24*3600,quoted: {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${isEnable ? '[✓]' : '[X]'}`,jpegThumbnail: fs.readFileSync('./multimedia/imagenes/mylogo.jpg') }}}})
  reacMoji(m.chat, conn, '✅', m)
}

handler.help = ['encender', 'apagar'].map(v => v + ' <opción>')
handler.tags = ['grupos', 'owner']
handler.command = /^((encender|apagar)|[01])$/i
handler.limit = true

export default handler
