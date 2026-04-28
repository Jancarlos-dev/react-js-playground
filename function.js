function greetUser(firstName, lastName) {
  return `Hola ${firstName} ${lastName}`;
}

console.log(greetUser("Jean Carlos", "Berito"));
console.log(greetUser("Berito", "Jean Carlos"));
console.log(greetUser("Jancarlos", "Hades"));

function weeklyWorkoutRoutine(
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
) {
  return `
Rutina de la semana:
Lunes: ${monday}
Martes: ${tuesday}
Miércoles: ${wednesday}
Jueves: ${thursday}
Viernes: ${friday}
Sábado: ${saturday}
Domingo: ${sunday}
  `.trim();
}

console.log(
  weeklyWorkoutRoutine(
    "Pecho",
    "Tríceps",
    "Hombros",
    "Piernas",
    "Bíceps",
    "Espalda",
    "Glúteos"
  )
);