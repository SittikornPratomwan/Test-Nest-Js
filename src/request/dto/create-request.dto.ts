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
  department: string;  // หน่วยงาน เช่น imd
  read?: number;  // ค่าอ่าน เช่น 1, 2 (default: 0)
  topic: string;
  content: string;
  estimated_days?: number;  // จำนวนวัน (ใช้เมื่อ direction = made_to_order)
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
  department: string;  // หน่วยงาน
  read: number;  // ค่าอ่าน
  topic: string;
  content: string;
  estimated_days?: number;  // จำนวนวัน
  status: StatusDto;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}
