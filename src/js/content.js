// Math Topics and Quiz Data
export const topics = [
    {
        id: 'fractions',
        title: 'Kasrlar',
        icon: '🍰',
        theory: 'Kasr - bu butun narsaning bir qismi. Masalan, pitssaning yarmi bu 1/2 qismini anglatadi.',
        quizzes: [
            { type: 'mcq', q: '1/2 + 1/2 nimaga teng?', options: ['1', '1/4', '2/2', '0'], correct: 0, difficulty: 'easy' },
            { type: 'fib', q: '3/4 kasrning surati necha?', correct: '3', difficulty: 'easy' },
            { type: 'mcq', q: 'Qaysi kasr katta: 1/3 yoki 1/4?', options: ['1/3', '1/4', 'Teng', 'Noma\'lum'], correct: 0, difficulty: 'medium' }
        ],
        videos: [
            { title: 'Kasrlar haqida tushuncha', url: 'https://www.youtube.com/embed/z8hYf9h_u90', xp: 20 }
        ]
    },
    {
        id: 'decimals',
        title: 'O\'nli kasrlar',
        icon: '🔢',
        theory: 'O\'nli kasrlar - maxraji 10, 100, 1000 bo\'lgan kasrlarning maxsus ko\'rinishidir.',
        quizzes: [
            { type: 'mcq', q: '0.5 ni oddiy kasrda yozing:', options: ['1/2', '1/5', '5/100', '1/10'], correct: 0, difficulty: 'easy' },
            { type: 'fib', q: '1.2 + 0.8 = ?', correct: '2', difficulty: 'easy' }
        ],
        videos: [
            { title: 'O\'nli kasrlarni qo\'shish', url: 'https://www.youtube.com/embed/y79o-e-Q8Vw', xp: 25 }
        ]
    },
    {
        id: 'algebra',
        title: 'Algebra asoslari',
        icon: '🧠',
        theory: 'Algebra - harfiy ifodalar va tenglamalar bilan ishlash fanidir.',
        quizzes: [
            { type: 'mcq', q: 'x + 5 = 12 bo\'lsa, x = ?', options: ['7', '6', '17', '5'], correct: 0, difficulty: 'easy' },
            { type: 'fib', q: '2x = 20 bo\'lsa, x necha?', correct: '10', difficulty: 'easy' }
        ],
        videos: [
            { title: 'Tenglamalar yechish', url: 'https://www.youtube.com/embed/L_n9-I4yI0Y', xp: 30 }
        ]
    },
    {
        id: 'geometry',
        title: 'Geometriya',
        icon: '📐',
        theory: 'Geometriya - shakllar va ularning xossalarini o\'rganadi.',
        quizzes: [
            { type: 'mcq', q: 'To\'g\'ri burchak necha gradus?', options: ['90', '180', '45', '60'], correct: 0, difficulty: 'easy' },
            { type: 'fib', q: 'Kvadratning tomoni 4 ta. Uning perimetri P = 4 * a. Tomoni 3 bo\'lsa P=?', correct: '12', difficulty: 'medium' }
        ],
        videos: [
            { title: 'Burchaklar turlari', url: 'https://www.youtube.com/embed/mG7v_fVwI-4', xp: 30 }
        ]
    }
];
