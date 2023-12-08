// Funció constructora
/* function person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  
    // Mètode
    this.greet = function() {
      console.log('Hello, my name is ' + this.name + ' and I am a ' + this.occupation + '.');
    }
  }

// const person1 = new Person('John', 30, 'developer');
const personData30 = [Alice,25,Enginyera,Bob,38,Metge,Charlie,42,Desenvolupador,Diana,29,Advocada,Edward,56,Arquitecte,Fiona,34,Comptable,George,45,Professor,Hannah,22,Estudiant,Ian,31,Dissenyador,Jasmine,28,Investigadora,Kurt,50,Cuiner,Laura,33,Periodista,Michael,44,Artista,Nina,27,Psicòloga,Oliver,39,Infermer,Penelope,26,Veterinària,Quincy,47,Empresari,Rachel,36,Actor,Sam,23,Científic,Tara,41,Banquer,Ulysses,49,Policia,Victoria,32,Pilot,Walter,55,Constructor,Xena,30,Farmacèutica,Yannick,37,Consultor,Zara,24,Analista,Eric,43,Ingenier,Sophie,20,Estudiant,Daniel,48,Director
];

for (let i = 0; i < personData30.length; i += 3) {
    const person++1 = new person([i],[i + 1],[i + 2]);

} */


// Aquest codi, a partir d'aquesta funció costructora d'objectes i un array de dades, genera automàticament 30 objectes amb les seves 3 propietats i un mètode. 
function person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  
    // Mètode
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am a ${this.occupation}.`;
    };
  };
  
  // Dades de les persones
  const personData30 = ['Alice', 25, 'Enginyera', 'Bob', 38, 'Metge', 'Charlie', 42, 'Desenvolupador', 'Diana', 29, 'Advocada', 'Edward', 56, 'Arquitecte', 'Fiona', 34, 'Comptable', 'George', 45, 'Professor', 'Hannah', 22, 'Estudiant', 'Ian', 31, 'Dissenyador', 'Jasmine', 28, 'Investigadora', 'Kurt', 50, 'Cuiner', 'Laura', 33, 'Periodista', 'Michael', 44, 'Artista', 'Nina', 27, 'Psicòloga', 'Oliver', 39, 'Infermer', 'Penelope', 26, 'Veterinària', 'Quincy', 47, 'Empresari', 'Rachel', 36, 'Actor', 'Sam', 23, 'Científic', 'Tara', 41, 'Banquer', 'Ulysses', 49, 'Policia', 'Victoria', 32, 'Pilot', 'Walter', 55, 'Constructor', 'Xena', 30, 'Farmacèutica', 'Yannick', 37, 'Consultor', 'Zara', 24, 'Analista', 'Eric', 43, 'Ingenier', 'Sophie', 20, 'Estudiant', 'Daniel', 48, 'Director', 'arç', 44, 'Empresari'];
  
  const personList = [];

  for (let i = 0; i < personData30.length; i += 3) {
      const newPerson = new person(personData30[i], personData30[i + 1], personData30[i + 2]);
      personList.push(newPerson);
  }