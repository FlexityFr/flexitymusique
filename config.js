module.exports = {
    app: {
        px: '§',
        token: 'ODk3ODQzNTk5ODA1Mzk0OTY1.YWbkAw.UenLM42u4WhnxAMrJcrfd3CiivA',
        playing: 'By Flexity ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};