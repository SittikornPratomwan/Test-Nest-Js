import { Injectable } from '@nestjs/common';
import { CreateRequestDto, RequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestService {
  private requests: RequestDto[] = [];
  private requestCounter = 1;

  create(createRequestDto: CreateRequestDto): RequestDto {
    const request_id = this.generateRequestId();
    
    const newRequest: RequestDto = {
      request_id,
      priority: createRequestDto.priority,
      project_name: createRequestDto.project_name,
      location: createRequestDto.location,
      date_request: createRequestDto.date_request || this.getTodayDate(),
      direction: createRequestDto.direction,
      category: createRequestDto.category,
      topic: createRequestDto.topic,
      content: createRequestDto.content,
      status: {
        step: 1,
        label: 'Awaiting Approval',
        approved_by: undefined,
      },
      created_by: createRequestDto.created_by,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.requests.push(newRequest);
    return newRequest;
  }

  findAll(): RequestDto[] {
    return this.requests;
  }

  findOne(id: string): RequestDto | undefined {
    return this.requests.find((req) => req.request_id === id);
  }

  update(id: string, updateData: Partial<CreateRequestDto>): RequestDto | undefined {
    const request = this.findOne(id);
    if (!request) return undefined;

    Object.assign(request, updateData, { updated_at: new Date() });
    return request;
  }

  remove(id: string): boolean {
    const index = this.requests.findIndex((req) => req.request_id === id);
    if (index === -1) return false;
    this.requests.splice(index, 1);
    return true;
  }

  private generateRequestId(): string {
    const counter = String(this.requestCounter++).padStart(4, '0');
    return `mt${counter}`;
  }

  private getTodayDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
