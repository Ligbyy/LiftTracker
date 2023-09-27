class Workout {
  constructor(id, name,date,numExercises) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.numExercises = numExercises;
    this.exercises = [];
  }

  addExercise(exercise) {
    // Add an exercise to the exercises array
    this.exercises.push(exercise);
  }

  removeExercise(exerciseName) {
    // Remove an exercise from the exercises array by name
    const indexToRemove = this.exercises.findIndex(exercise => exercise.name === exerciseName);
    if (indexToRemove !== -1) {
      this.exercises.splice(indexToRemove, 1);
    }
  }
}

export default Workout;