import { Category } from "./category";

export interface LessonFormValues {
    title: string;
    description?: string;
    type: string;
    file: { file: File, fileList: File[] };
    subjectId: string;
    classId: string;
    thumbnail?: { file: File, fileList: File[] };
    price: number;
    rating: number;
    categoryIds?: string[];
    zipFile?: { file: File, fileList: File[] };
}

export type LessonType = 'video' | 'flash' | 'document';

export enum LessonTypeEnum {
    VIDEO = 'video',
    FLASH = 'flash',
    DOCUMENT = 'document'
}

export interface Lesson{
    id: number;
    title: string;
    topic: string|null;
    type: string;
    description: string|null;
    classId: string| null;
    subjectId: string| null;
    fileId: number| null;
    price: number;
    rating: number;
    categories:{category: Category}[];
    thumbnailId?: number| null;
    zipFileId?: number| null;
    thumbnail?: { path: string }| null;
    file?: { id: number; key: string| null, size: number; }| null;
    
}

export interface LessonResponse {
    data: Lesson[];
    total: number;
    page: number;
    limit: number;
}

export interface LessonContentResponse {
    lesson:Lesson
    url: string;
}

export type PersonalLibResponse = {
    data: any[],
    totalCount: number,
    currentPage: number,
    limit: number
}

export interface CreateLessonReview{
    rating?: number;
    comment?: string;
}