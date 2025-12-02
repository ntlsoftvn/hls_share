export interface ClassResponse {
    id: string;
    name: string;
    order: number;
    subjects?: {
        classId: string;
        subjectId: string;
    }[]
}