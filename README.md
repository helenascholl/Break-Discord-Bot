# Discord-Pause-Bot

A bot that reminds your teacher that the break has begun.

## Invite

https://discordapp.com/oauth2/authorize?&client_id=690470823198195722&scope=bot&permissions=2048


## How to use the bot

### Adding breaks

To add breaks type `p!configure [json]` in the channel you want the bot to send the message to. The `json` should look like this:

```json
[
    {
        "time": {
            "hour": 16,
            "minute": 20,
            "dayOfWeek": 5
        },
        "message": "Pause!"
    },
    {
        "time": {
            "hour": 6,
            "minute": 9,
            "dayOfWeek": 2
        }
    }
]
```

The `message` attribute is optional. It specifies the message that is sent by the bot.

### Clearing breaks

To clear all breaks type `p!clear`.

## Developers

If you want to run the bot yourself, [create a new Discord Bot](https://discordapp.com/developers/docs/intro#bots-and-apps) and copy the token into a file called `auth.json`. It should look like this:

```json
{
    "token": "[Your Token]"
}
```