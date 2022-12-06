export default interface DoneRequest {
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
  requestsDone: DoneRequest[];
}

export type DoneRequestId = DoneRequest['id'];

export type Action =
  | { type: 'requestsDone/addAsyncRequest'; payload: DoneRequest[] };
