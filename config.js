module.exports = {
    app: {
        px: '§',
        token: 'ODk3ODQzNTk5ODA1Mzk0OTY1.YWbkAw.H7UM2WHHZp-aD6Quf3kwkph4doU',
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
