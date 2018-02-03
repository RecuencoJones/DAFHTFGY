[![Build Status](https://travis-ci.org/RecuencoJones/DAFHTFGY.svg?branch=develop)](https://travis-ci.org/RecuencoJones/DAFHTFGY)
[![Twitter Follow](https://img.shields.io/twitter/follow/DAFHTFGY.svg?style=social&label=Follow&style=plastic)](https://twitter.com/DAFHTFGY)

# DAFHTFGY - Did Adrián Finish His TFG Yet? <sub><sub>Probably no</sub></sub>

This unpronounceable project is a simple and gentle reminder bot for [@ClockworkAdriem](https://twitter.com/ClockworkAdriem)
to work on his TFG—Spanish acronym for End-of-Degree Project.

## How does it work?

- On a daily basis, the bot awaits for commits until a random hour between 12:00 and 18:00.
- If no commits are pushed to the repository, a reckless `no` message will be tweeted.
- In the expremely unexpected event of finding a new commit, we will be rewarded with an encouraging `progress` tweet!
- If there was a commit this day and no `no` message has been tweeted yet, no `no` message will be tweeted until reset.

> The bot resets every day, obviously.

### GitHub PUSH webhook

Follow these steps to setup the push webhook:

1. Go to `Settings` > `Webhooks`.
1. Click on `Add webhook`.
1. Set `Payload URL` (ask me).
1. Set `Content type` to `application/json`.
1. Set `Secret` (ask me too).
1. Let `Just the push event.` option enabled.
1. Make sure `Active` is checked.
1. Finally, hit `Add webhook` and we are GTG.

### Twitter Application

There is a twitter bot ([@DAFHTFGY](https://twitter.com/DAFHTFGY)) that feeds from this application.

## Configuration

The following environment variables are used within the application:

| Variable | Default value | |
| ----- | ----- | ----- |
| `port` | `8080` | TCP Port where the application will be listening for requests |
| `loglevel` | `info` | Logging level, one of: silent, error, warn, info, debug, all |
| `interval` | `0 0 * * *` | Cron interval for the bot to reset, everyday at 00:00 by default |
| `github_secret` | | Secret that should be shared between the server and github for signing webhook events |
| `consumer_key` | | Twitter Application key |
| `consumer_secret` | | Twitter Application secret |
| `access_token_key` | | Twitter Application access token |
| `access_token_secret` | | Twitter Application access token secret |
