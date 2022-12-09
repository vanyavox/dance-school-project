import Lesson from './Lesson';

export interface State {
    lessons: Lesson[];
    error: string | undefined;
    message: string;

}
