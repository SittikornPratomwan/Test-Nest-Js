export enum LocationEnum {
  JRP = 'JRP',
  JRPE = 'JRPE',
  JHO = 'JHO',
}

export enum DirectionEnum {
  BUILD = 'build',
  REPAIR = 'repair',
  MADE_TO_ORDER = 'made_to_order',
}

export enum CategoryEnum {
  ELECTRIC = 'electric',
  WATER_PIPE = 'water_pipe',
  AC = 'ac',
  INTERNET = 'internet',
  CAR = 'car',
  DORM = 'dorm',
  MACHINE = 'machine',
}

export enum PriorityEnum {
  NORMAL = 'normal',
  URGENT = 'urgent',
  PROJECT = 'project',
}

export class StatusDto {
  step: number;
  label: string;
  approved_by?: string;
}

export class CreateRequestDto {
  priority: PriorityEnum;
  project_name?: string;
  location: LocationEnum;
  date_request?: string;
  direction: DirectionEnum;
  category: CategoryEnum;
  topic: string;
  content: string;
  created_by: string;
}

export class RequestDto {
  request_id: string;
  priority: string;
  project_name?: string;
  location: string;
  date_request: string;
  direction: string;
  category: string;
  topic: string;
  content: string;
  status: StatusDto;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}
