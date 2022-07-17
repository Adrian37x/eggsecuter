import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    test() {
        Logger.log("Accessed App Route");
        return "Hello World!";
    }
}
