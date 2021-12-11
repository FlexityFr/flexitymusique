const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est diffusée actuellement ${message.author}... réessayer ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Vous devez d'abord désactiver la musique en cours dans le mode boucle (${client.config.app.px}loop) ${message.author}... réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode de répétition **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toute la file d'attente sera répétée à l'infini 🔁` : `Quelque chose a mal tourné ${message.author}... réessayer ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author}... réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode de répétition **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la musique actuelle sera répétée à l'infini (vous pouvez boucler la file d'attente avec la fonction <queue> option) 🔂` : `Quelque chose a mal tourné ${message.author}... réessayer ? ❌`);
        };
    },
};