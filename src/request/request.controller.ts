import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: Partial<CreateRequestDto>) {
    return this.requestService.update(id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.requestService.remove(id);
    return { success: result };
  }
}
