import { Part1Question, Part3Question } from './types';

// Audio Source URLs extracted from the iframe src provided
export const PART1_AUDIO_SRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2220937376&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
export const PART3_AUDIO_SRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2220934889&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export const PART1_DATA: Part1Question[] = [
  {
    id: 1,
    questionText: "What time is the man’s appointment?",
    imageUrl: "https://i.postimg.cc/SNH38Q5T/Screen-Shot-2025-11-29-at-15-25-56.png",
    correctAnswer: 'C'
  },
  {
    id: 2,
    questionText: "Why is the woman going to be late for work?",
    imageUrl: "https://i.postimg.cc/Dz6xC7C5/Screen-Shot-2025-11-29-at-15-26-22.png",
    correctAnswer: 'B'
  },
  {
    id: 3,
    questionText: "Which sport was the man unable watch on TV?",
    imageUrl: "https://i.postimg.cc/Nj4nn8FK/Screen-Shot-2025-11-29-at-15-26-39.png",
    correctAnswer: 'B'
  },
  {
    id: 4,
    questionText: "Where are floods expected to cause problems?",
    imageUrl: "https://i.postimg.cc/t42rkXvk/Screen-Shot-2025-11-29-at-15-26-49.png",
    correctAnswer: 'A'
  },
  {
    id: 5,
    questionText: "How many people are going to the party so far?",
    imageUrl: "https://i.postimg.cc/R02Lpq7D/Screen-Shot-2025-11-29-at-15-27-01.png",
    correctAnswer: 'B'
  },
  {
    id: 6,
    questionText: "What does the woman finally buy to drink?",
    imageUrl: "https://i.postimg.cc/zBjSzpmp/Screen-Shot-2025-11-29-at-15-27-18.png",
    correctAnswer: 'B'
  },
  {
    id: 7,
    questionText: "When does the caller want to move into the flat?",
    imageUrl: "https://i.postimg.cc/3xvX435F/Screen-Shot-2025-11-29-at-15-27-28.png",
    correctAnswer: 'C'
  }
];

export const PART3_DATA: Part3Question[] = [
  {
    id: 14,
    preText: "For a full programme of events, text",
    postText: ".",
    correctAnswers: ["1576"]
  },
  {
    id: 15,
    preText: "The Activity Centre is running indoor",
    postText: "sessions for beginners.",
    correctAnswers: ["climbing"]
  },
  {
    id: 16,
    preText: "There are also walks along the",
    postText: "to learn about the local wildlife.",
    correctAnswers: ["coast path"]
  },
  {
    id: 17,
    preText: "The Activity Centre is running an open day on",
    postText: "June.",
    correctAnswers: ["13", "13th"]
  },
  {
    id: 18,
    preText: "On the History Group walk you can learn about a famous",
    postText: "who was born in the area.",
    correctAnswers: ["celebrity"]
  },
  {
    id: 19,
    preText: "If you’re interested in writing",
    postText: "don’t forget to book a place with the Arts Centre.",
    correctAnswers: ["poetry"]
  }
];