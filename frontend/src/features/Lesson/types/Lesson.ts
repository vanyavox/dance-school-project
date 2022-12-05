export default interface Lesson {
    id: number;
    lesson_type: string;
    teacher_id: number;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}
export type LessonId = Lesson ['id'];
