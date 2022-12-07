export interface Teacher {
  id: number;
  idd?: number;
  name: string;
  surname: string;
  direction: string;
  experience: number;
  description: string;
  photo: string;
}

export interface NewTeacher {
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
  | { type: 'teachers/addAsyncTeachers'; payload: TeacherId }
  | { type: 'teachers/deleteAsyncTeachers'; payload: TeacherId }
  | { type: 'teachers/initAsyncTeachers'; payload: Teacher[] }
  | { type: 'teachers/changeAsyncTeachers'; payload: Teacher };
