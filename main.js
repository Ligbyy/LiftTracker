import Workout from './objects/workout.js';
import Exercise from './objects/exercise.js'


const todaysExercise = new Exercise('Pull ups', 3, 5, 225);
const todaysWorkout = new Workout(2487284, 'Tuesday Pull Day', '2019-01-01', 1);
todaysWorkout.addExercise(todaysExercise);


console.log(todaysWorkout);