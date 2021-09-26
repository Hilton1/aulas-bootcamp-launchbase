const classA = [
    {
        name: "Hilton",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: 'Mais um student',
        grade: 10
    }
];

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },

    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 0
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
];

// Calcula a média da turma

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }

    const average = sum / students.length;

    return average;
}

// Envia mensagem do cálculo da média

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`);
    } else {
        console.log(`${turma} average: ${average}. Is not good.`);
    }
}

// Seta o estudante como reprovado

function markAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true;
    }
}

// Envia mensagem dizendo que o estudante foi reprovado

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`);
    }
}

// Marca como reprovado e envia mensagem para todos 
// os estudantes reprovados da turma

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

studentsFlunkeds(classA);
studentsFlunkeds(classB);