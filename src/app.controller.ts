import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Animal } from './entities/Animal';
import { async } from 'rxjs/internal/scheduler/async';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async addAnimal() {
    return await this.appService.addAnimal(
      new Animal({ GlobalId: '1-2-2012-HO-M-000123456789', Gender: 'M', DateOfBirth: new Date('1/2/2012'), ShortName: 'Derek', RegName: 'Derek John Damko' }), 
      new Animal({ GlobalId: '5-22-2008-HO-M-000123456789', Gender: 'M', DateOfBirth: new Date('5/22/2008'), ShortName: 'Kenneth', RegName: 'Kenneth Charles Damko' }), 
      new Animal({ GlobalId: '9-12-2009-HO-M-000123456789', Gender: 'M', DateOfBirth: new Date('9/12/2009'), ShortName: 'Karen', RegName: 'Karen Anne Damko' })
    )
  }

  @Get(':name')
  async getAnimal(@Param() params) {
    return await this.appService.getAnimal(params.name);
  }
}
