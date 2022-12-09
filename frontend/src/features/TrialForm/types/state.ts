export interface NewRequest {
  id: number;
  student_id: number;
  name: string;
  date: string;
  time: string;
  lesson_type: string;
  phone: string;
  status: string;
}

export interface State {
  requests: NewRequest[];
}

export type RequestId = NewRequest['id'];

export type Action =
  | { type: 'requests/addAsyncRequest'; payload: NewRequest[] }
  | { type: 'requests/deleteAsyncRequest'; payload: number }
  | { type: 'requests/changeAsyncRequest'; payload: number };
