export class StatusDto {
  step: number;
  label: string;
  approved_by?: string;
}

export class CreateRequestDto {
  priority: 'normal' | 'urgent' | 'project';
  project_name?: string;
  location: 'JRP' | 'JRPE' | 'อื่นๆ';
  date_request?: string;
  direction: 'build' | 'repair' | 'made_to_order';
  category: 'electric' | 'water_pipe' | 'AC' | 'internet' | 'car' | 'dorm' | 'machine';
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
