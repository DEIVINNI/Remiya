module.exports = {
    run: async(msg) => {
        msg.channel.startTyping(true);
        require('snekfetch').get(`https://nekobot.xyz/api/imagegen?type=captcha&url=${msg.author.displayAvatarURL}&username=${msg.author.username}`)
        .then(async(r) => {
            msg.delete();
            await msg.channel.send({
                embed:{
                    image: {url: r.body.message},
                    footer:{
                        icon_url: msg.author.displayAvatarURL,
                        text: msg.author.tag
                    },
                    timestamp: new Date(),
                    color: msg.config.colors.padrão
                }
            })
        })
        msg.channel.stopTyping(true);
    },
    conf:{
        aliases: [],
        nsfw: false,
        guildOnly: false,
        ownerOnly: false,
        manu: false,
        enable: true,
        hide_help: true,
        cooldown: 10
    },
    help: {
       name: 'captcha',
       description: 'faça um captcha com sua foto.',
       usage: ['captcha'],
       member: 'usuários',
       category: 'imagens'
    }
}