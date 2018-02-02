import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Common } from './modules/common/common.module'
import { Env } from './modules/common/env.component'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const env = app.select(Common).get(Env)

  await app.listen(env.get('port', 8080))
}
bootstrap()
