import 'svelte/register';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { apiPrefix } from './util/constants';
import { join } from 'path';
import { NotFoundExceptionFilter } from './notFoundExceptionFilter';

async function bootstrap() {  
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setGlobalPrefix(apiPrefix);
    app.useStaticAssets(join("client", "public"));
    app.useGlobalFilters(new NotFoundExceptionFilter());

    await app.listen(3000);

    Logger.log(`Server listening: ${await app.getUrl()}`)
}
bootstrap();
