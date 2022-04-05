const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addShift = (obj, key, value) => {
      obj[key] = value;
  }
  addShift(lesson2, 'turno', 'noite');

  const showKeys = (obj) => {
      console.log(Object.keys(obj));
  };

  const quantasKeys = (obj) => {
      console.log(Object.keys(obj).lenght);
  }

  const showValues = (obj) => {
      console.log(Object.values(obj));
  }

  const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

  const somaEstudantes = (obj) => {
    let ctrlvariable = 0;
    for (let i = 0; i < Object.values(allLessons).length; i++) {
        ctrlvariable += Object.values(allLessons)[i]['numeroEstudantes'];
    }
    return ctrlvariable;
};

const getValue = (obj, position) => {
    return Object.values(obj)[position];
}

const verifyPair = (obj, key, value) => {
    return Object.entries(obj).includes([key, value]);
}