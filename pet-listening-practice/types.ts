export interface Part1Question {
  id: number;
  questionText: string;
  imageUrl: string;
  correctAnswer: 'A' | 'B' | 'C';
}

export interface Part3Question {
  id: number;
  preText: string;
  postText: string;
  correctAnswers: string[]; // Array to allow variations like "13" and "13th"
}

export type ExamPart = 'HOME' | 'PART1' | 'PART3';