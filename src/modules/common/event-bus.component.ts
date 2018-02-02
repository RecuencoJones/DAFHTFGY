import { EventEmitter } from 'events'
import { Component } from '@nestjs/common'

@Component()
export class EventBus extends EventEmitter {}
