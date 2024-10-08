import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
    .setTitle('Vehicle API')
    .setDescription('API for vehicles')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('backend', app, document);
  
  await app.listen(3000);
  console.log('You can see the Swagger documentation on: http://localhost:3000/backend');
}

bootstrap();
