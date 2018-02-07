import { Component } from '@nestjs/common'
import { Env } from './env.component'

const levels = [
  'all',
  'debug',
  'info',
  'warn',
  'error',
  'silent'
]

@Component()
export class Logger {
  private level: string

  constructor(private readonly env: Env) {
    this.level = this.env.get('loglevel', 'info').toLowerCase()
  }

  error(...messages) {
    this.log('error', ...messages)
  }

  info(...messages) {
    this.log('info', ...messages)
  }

  warn(...messages) {
    this.log('warn', ...messages)
  }

  debug(...messages) {
    this.log('debug', ...messages)
  }

  private log(level: string, ...messages) {
    const timestamp = (new Date()).toISOString()

    if (levels.indexOf(level) >= levels.indexOf(this.level)) {
      console.log(`[${timestamp}]`, `[${level}]`, ...messages)
    }
  }
}
