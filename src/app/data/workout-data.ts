import { IWorkout } from '../interfaces/iworkout';

const WORKOUT_DATA: IWorkout[] = [
  {id: 1, workout: 'Squat', sets: 3, reps: 10, weight: 100},
  {id: 2, workout: 'Bent Over Row', sets: 3, reps: 10, weight: 25},
  {id: 3, workout: 'Deadlift', sets: 3, reps: 8, weight: 90},
  {id: 4, workout: 'Bench Press', sets: 3, reps: 10, weight: 30},
  {id: 5, workout: 'Lat Raise', sets: 2, reps: 10, weight: 15},
  {id: 6, workout: 'Bicep Curl', sets: 2, reps: 10, weight: 20},
  {id: 7, workout: 'Tricep Extension', sets: 2, reps: 10, weight: 25}
];

export {WORKOUT_DATA};
