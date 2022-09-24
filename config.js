/**
[ By @AzaZel || https://github.com/DoNKoMaR/ ]
**/
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { en, es } from './lib/lenguajes/nexo.js'

//Metodo para cargar archivos con ESModules en Node.js
import { createRequire } from 'module'
import { join, dirname } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const dPkg = require(join(__dirname, './package.json'))
//
global.MultiNK = es; //Lenguaje nativo
global.Propietario = dPkg.author.name
global.OwnerNum = '79773452127'
global.PaisPrefix = '51'
global.Prefijo = '.'
global.MyApiKey = 'Azazel' //zzz
global.NombreDelBot = 'Azazel Bot' //vMD
global.BotVersion = dPkg.version
global.TusRedesSociales = "[ > ] Canal de Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Página de Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/\n\nᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ⁻ ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ  :³"
global.MinimoDeUsuarios = '2'

global.owner = [
  [OwnerNum, Propietario, true]
]

global.mods = []
global.prems = []

global.APIs = {
  name: 'https://website'
}

global.APIKeys = {
  'https://website': 'apikey'
}

global.multiplier = 100

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  // inspired from https://github.com/Fokusdotid/Family-MD/blob/main/plugins/_role.js
  // https://github.com/BochilGaming/games-wabot/issues/389
  // https://github.com/BochilGaming/games-wabot/issues/32
  // Also thanks to github copilot for the idea of ​​role name
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
    const role=[{name:'Esclavo Nivel-Ⅱ',level:0},{name:'Esclavo Nivel-Ⅲ',level:4},{name:'Esclavo Nivel-Ⅳ',level:8},{name:'Esclavo Nivel-Ⅴ',level:12},{name:'Novato ✓',level:16},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:20},{name:'Recluta Nivel-Ⅰ',level:24},{name:'Recluta Nivel-Ⅱ',level:28},{name:'Recluta Nivel-Ⅲ',level:32},{name:'Recluta Nivel-Ⅳ',level:36},{name:'Recluta Nivel-Ⅴ',level:40},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:44},{name:'Soldado De Primera Clase',level:48},{name:'Soladado Con Honores',level:52},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:56},{name:'Especialista',level:60},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:64},{name:'Cabo Sub-1',level:68},{name:'Cabo Sub-2',level:72},{name:'Cabo Sub-3',level:76},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:80},{name:'Sargento',level:84},{name:'Sargento de Segunda Clase',level:88},{name:'Sargento de Primera Clase',level:92},{name:'Sargento Maestro',level:96},{name:'Sargento Primero',level:100},{name:'Sargento Mayor',level:104},{name:'Sargento Mayor de Comando',level:108},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:112},{name:'Teniente',level:116},{name:'Teniente Primero',level:120},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:124},{name:'Capitan',level:128},{name:'Capitan Teniente',level:132},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:136},{name:'Mayor',level:140},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:144},{name:'Teniente coronel',level:148},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:152},{name:'Coronel [－]',level:156},{name:'Coronel [＝]',level:160},{name:'Coronel [≡]',level:164},{name:'Coronel [≥]',level:168},{name:'Coronel [≧]',level:172},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:176},{name:'General de brigada ㈠',level:180},{name:'General de brigada ㈡',level:184},{name:'General de brigada ㈢',level:188},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:192},{name:'General ︾',level:196},{name:'General ︾︾',level:200},{name:'General ︾︾︾',level:204},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:208},{name:'Lider De Alto Mando •',level:212},{name:'Lider De Alto Mando ••',level:216},{name:'Lider De Alto Mando ⊙',level:220},{name:'Lider De Alto Mando ⊚',level:224},{name:'Lider De Alto Mando ⊛',level:228},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:232},{name:'Retirado Con Honores',level:236},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:240},{name:'Heroe Bronce ☆',level:244},{name:'Heroe Plata ☆',level:248},{name:'Heroe Oro ☆',level:252},{name:'Heroe Diamante ☆',level:256},{name:'*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n',level:260},{name:'Leyenda ✩',level:264},{name:'Leyenda ✩✩',level:268},{name:'Leyenda ✩✩✩',level:272},{name:'Leyenda ✩✩✩✩',level:276},{name:'Leyenda ✩✩✩✩✩',level:280},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:284},{name:'Angel ✬',level:288},{name:'Angel ✬✬',level:292},{name:'Angel ✬✬✬',level:296},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:300},{name:'Principado ✯',level:304},{name:'Principado ✯✯',level:308},{name:'Principado ✯✯✯',level:312},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:316},{name:'Potestad ✪',level:320},{name:'Potestad ✪✪',level:324},{name:'Potestad ✪✪✪',level:328},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:332},{name:'Grigori ♧',level:336},{name:'Grigori ♧♧',level:340},{name:'Grigori ♧♧♧',level:344},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:348},{name:'Paladin ♤',level:352},{name:'Paladin ♤♤',level:356},{name:'Paladin ♤♤♤',level:360},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:364},{name:'Regente Tipo 1',level:368},{name:'Regente Tipo 2',level:372},{name:'Regente Tipo 3',level:376},{name:'Regente Tipo 4',level:380},{name:'Regente Tipo 5',level:384},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:388},{name:'Arcangel •',level:392},{name:'Arcangel ○',level:396},{name:'Arcangel ●',level:400},{name:'Arcangel □',level:404},{name:'Arcangel ■',level:408},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:412},{name:'Guardia Celestial Tipo 1',level:416},{name:'Guardia Celestial Tipo 2',level:420},{name:'Guardia Celestial Tipo 3',level:424},{name:'Guardia Celestial Tipo 4',level:428},{name:'Guardia Celestial Tipo 5',level:432},{name:'Ascendiendo a niveles sagrados mi king continua con tu travesia... 🌌',level:436},{name:'Ascension Divina Proceso 1.0...',level:440},{name:'Ascension Divina Proceso 2.0...',level:444},{name:'Ascension Divina Proceso 3.0...',level:448},{name:'Ascension Divina Proceso 4.0...',level:452},{name:'Ascension Divina Proceso 5.0...',level:456},{name:'Ascendiendo A Poderes Divinos 🧿\n*FELICIDADES SIGUE ASI MI KING*',level:460},{name:'Entidad Menor Tipo I',level:464},{name:'Entidad Menor Tipo II',level:468},{name:'Entidad Menor Tipo III',level:472},{name:'Entidad Menor Tipo IV',level:476},{name:'Entidad Menor Tipo V',level:480},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:484},{name:'Entidad Mayor Tipo I',level:488},{name:'Entidad Mayor Tipo II',level:492},{name:'Entidad Mayor Tipo III',level:496},{name:'Entidad Mayor Tipo IV',level:500},{name:'Entidad Mayor Tipo V',level:504},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:508},{name:'Semi-Dios ◇',level:512},{name:'Semi-Dios ◇◇',level:516},{name:'Semi-Dios ◇◇◇',level:520},{name:'Semi-Dios ◇◇◇◇',level:524},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:528},{name:'Forjador De Mundos •',level:532},{name:'Forjador De Mundos ▪︎',level:536},{name:'Forjador De Mundos ○',level:540},{name:'Forjador De Mundos ●',level:544},{name:'Forjador De Mundos □',level:548},{name:'Forjador De Mundos ■',level:552},{name:'Forjador De Mundos ♡',level:556},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:560},{name:'Dios Nivel 0',level:564},{name:'Dios Nivel 1',level:568},{name:'Dios Nivel 2',level:572},{name:'Dios Nivel 3',level:576},{name:'Dios Nivel 4',level:580},{name:'Dios Nivel 5',level:584},{name:'Dios Nivel 8',level:588},{name:'Dios Nivel 10',level:592},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:596},{name:'Señor de Panteón Tipo-I',level:600},{name:'Señor de Panteón Tipo-II',level:604},{name:'Señor de Panteón Tipo-III',level:608},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:612},{name:'Juez Del Destino Faze Intermedia',level:616},{name:'Juez Del Destino Faze Avanzada',level:620},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:624},{name:'Control De La Materia Fase 1',level:628},{name:'Control De La Materia Fase 2',level:632},{name:'Control De La Materia Fase 3',level:636},{name:'Control De La Materia Fase 4',level:640},{name:'Control De La Materia Fase 5',level:644},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:648},{name:'Controlador Del Universo\nFase 1',level:652},{name:'Controlador Del Universo\nFase 2',level:656},{name:'Controlador Del Universo\nFase 3',level:799},{name:'Controlador Del Universo\nFase 4',level:800},{name:'Controlador Del Universo\nFase 5',level:850},{name:'Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI MI KING*',level:899},{name:'EN ASCENSO A UN PODER INIMAGINABLE... ☯️',level:999},{name:'\n*Control Del Todo Absoluto por encima de Dios* 🔥\n',level:1050},{name:'[ Felicidades!!! ]\nAlcansaste el máximo nivel, muchísimas gracias por interactuar conmigo :,3',level:1076},]

return role.reverse().find(role => level >= role.level)
}
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyan("\n["+file+"] Fue actualizado con exito!\n"))
  import(`${file}?update=${Date.now()}`)
})
