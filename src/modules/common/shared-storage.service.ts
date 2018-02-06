import { Component } from '@nestjs/common'

@Component()
export class SharedStorage {
  private data = {}

  get(path) {
    return this.data[path]
  }

  set(path, data) {
    return this.data[path] = data
  }
}
