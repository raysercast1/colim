import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port: number = config.get('server.port')
  await app.listen(port);
}
bootstrap();
