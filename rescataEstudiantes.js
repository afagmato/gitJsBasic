// Complicant-me la vida!!!!!!
function solution(estudiantes, deathCount, nuevo) 
{
    if (deathCount === 0) {
        estudiantes.push(nuevo)
        return estudiantes
    }
    else if (deathCount > 0) {
        for (let i = 0; i < deathCount; i++) {
            estudiantes.pop()
        }
        estudiantes.push(nuevo)
        return estudiantes
    }
}

// Amb for és prou curt
function solution(estudiantes, deathCount, nuevo) {
    for (let i = 0; i < deathCount; i++) {
    estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
}

solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
solution(["Nath", "Luisa", "Noru"], 2, "Cami");

// També podríem fer servir el while: 
function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
  
    estudiantes.push(nuevo);
    return estudiantes;
  }