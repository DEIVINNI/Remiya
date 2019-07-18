module.exports = {
    run: async(msg) => {
        if (!msg.args.join(' ')) return msg.channel.send(`${msg.config.e_men.errado} \`|\` ${msg.author}, você deve color a mensagem desejada para ser transrformada em código morse.`);
        let morse = {
            'a': '.-',     'b': '-...',   'c': '-.-.',   'd': '-..',
            'e': '.',      'f': '..-.',   'g': '--.',    'h': '....',
            'i': '..',     'j': '.---',   'k': '-.-',    'l': '.-..',
            'm': '--',     'n': '-.',     'o': '---',    'p': '.--.',
            'q': '--.-',   'r': '.-.',    's': '...',    't': '-',
            'u': '..-',    'v': '...-',   'w': '.--',    'x': '-..-',
            'y': '-.--',   'z': '--..',
            '0': '-----',  '1': '.----',  '2': '..---',  '3': '...--',
            '4': '....-',  '5': '.....',  '6': '-....',  '7': '--...',
            '8': '---..',  '9': '----.',
            '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
            '!': '-.-.--', '/': '-..-.',  '(': '-.--.',  ')': '-.--.-',
            '&': '.-...',  ':': '---...', ';': '-.-.-.', '=': '-...-',
            '+': '.-.-.',  '-': '-....-', '"': '.-..-.', '$': '...-..-',
            '@': '.--.-.',
            'à': '.--.-',  'ä': '.-.-',   'å': '.--.-',  'ą': '.-.-',
            'æ': '.-.-',   'ć': '-.-..',  'ĉ': '-.-..',  'ç': '-.-..',
            'ch': '----',  'đ': '..-..',  'ð': '..--.',  'é': '..-..',
            'è': '.-..-',  'ę': '..-..',  'ĝ': '--.-.',  'ĥ': '----',
            'ĵ': '.---.',  'ł': '.-..-',  'ń': '--.--',  'ñ': '--.--',
            'ó': '---.',   'ö': '---.',   'ø': '---.',   'ś': '...-...',
            'ŝ': '...-.',  'š': '----',   'þ': '.--..',  'ü': '..--',
            'ŭ': '..--',   'ź': '--..-.', 'ż': '--..-',  ' ': '\u2007'
        }
        msg.channel.send(require('common-tags').stripIndents`
        ${msg.config.e_men._correto} \`|\` ${msg.author}, aqui está o seu \`código morse\`:
        \`\`\`
        ${msg.args.join(' ').toLowerCase().replace(/./g, x => morse[x]+'\u2001').trim()}
        \`\`\``);
    },
    conf:{
        aliases: [],
        nsfw: false,
        guildOnly: false,
        ownerOnly: false,
        manu: false,
        enable: true,
        hide_help: true,
        cooldown: 5
    },
    help: {
       name: 'morse',
       description: 'transforme uma frase em código morse.',
       usage: ['morse <mensagem>'],
       member: 'usuários',
       category: 'utilidades'
    }
}