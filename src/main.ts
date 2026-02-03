import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // เปิดใช้ CORS เพื่อให้ Dart สามารถเรียก API ได้
  app.enableCors({
    origin: '*', // อนุญาตให้ทุก domain เข้าถึง (เปลี่ยนเป็นเฉพาะ domain ในการ production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const port = process.env.PORT ?? 3000;
  const host = '0.0.0.0';
  await app.listen(port, host, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
    console.log(`🚀 Network access: http://192.168.1.100:${port}`);
  });
}
bootstrap();
