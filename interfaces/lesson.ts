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
    id: string;
    title: string;
    type: LessonType;
    description: string;
    classId: string;
    subjectId: string;
    fileId: number;
    price: number;
    rating: number;
    categories:any[];
    thumbnailId?: number;
    zipFileId?: number;
    thumbnail?: { path: string };
}

export interface LessonResponse {
    data: Lesson[];
    total: number;
    page: number;
    limit: number;
}

export type PersonalLibResponse = {
    data: any[],
    totalCount: number,
    currentPage: number,
    limit: number
}