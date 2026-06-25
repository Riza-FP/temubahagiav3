import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('main-page')
  root() {
    return { layout: 'layout' };
  }

  @Get('about')
  @Render('about')
  about() {
    return { layout: 'layout' };
  }

  @Get('finding-me')
  @Render('finding-me')
  findingMe() {
    return { layout: 'layout' };
  }

  @Get('finding-you')
  @Render('finding-you')
  findingYou() {
    return { layout: 'layout' };
  }

  @Get('finding-us')
  @Render('finding-us')
  findingUs() {
    return { layout: 'layout' };
  }
}
