import { Component } from '@nestjs/common'

@Component()
export class Random {
  next() {
    return Math.random()
  }
}
