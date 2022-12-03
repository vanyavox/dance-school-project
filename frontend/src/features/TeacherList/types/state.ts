export interface Teacher {
  id: number;
  name: string;
  surname: string;
  direction: string;
  experience: number;
  description: string;
  photo: string;
}

export interface State {
  teachers: Teacher[];
}

export type TeacherId = Teacher['id'];

export type Action =
  | { type: 'teachers/addAsyncTeachers'; payload: Teacher[] };
