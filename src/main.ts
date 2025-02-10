import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Example NestJS Swagger')
  .setDescription('API cho User và Order')
  .setVersion('1.0')
  // .addBearerAuth() // Nếu dùng JWT, có thể bật xác thực
  .build();

  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
