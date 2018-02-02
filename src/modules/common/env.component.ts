import { config } from 'dotenv'
import { Component } from '@nestjs/common'

config()

@Component()
export class Env {
  private props = process.env

  get(path, defaultValue?) {
    const value = this.props[path]

    return typeof value === 'undefined' ? defaultValue : value
  }
}
