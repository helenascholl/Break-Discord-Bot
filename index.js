const Discord = require('discord.io');
const schedule = require('node-schedule');

const auth = require('./auth.json');

const jobs = [];

const pauseBot = new Discord.Client({
    token: auth.token,
    autorun: true
});

pauseBot.on('ready', () => console.log('Bot started'));

pauseBot.on('message', (user, userId, channelId, message) => {
    if (message.startsWith('p!configure ')) {
        try {
            const configurations = JSON.parse(message.substring(12));

            for (const configuration of configurations) {
                jobs.push(schedule.scheduleJob(configuration.time, () => {
                    pauseBot.sendMessage({
                        to: channelId,
                        message: configuration.message || 'Pause!'
                    });
                }));
            }
    
            pauseBot.sendMessage({
                    to: channelId,
                    message: 'Saved configurations!'
            });
        } catch (error) {
            console.error(error);
            pauseBot.sendMessage({
                to: channelId,
                message: 'Invalid configuration!'
            });
        }
    } else if (message === 'p!clear') {
        for (const job of jobs) {
            job.cancel();
        }

        jobs = [];

        pauseBot.sendMessage({
            to: channelId,
            message: 'Cleared configurations!'
        });
    }
});