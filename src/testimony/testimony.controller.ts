
import { Controller, Get, Render } from '@nestjs/common';
import { TestimonyService } from './testimony.service';

@Controller('testimony')
export class TestimonyController {
  constructor(private readonly testimonyService: TestimonyService) {}



  @Get()
  @Render('testimony')
  findAll() {
    return {};
  }

}
