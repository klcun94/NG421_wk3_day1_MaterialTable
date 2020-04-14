import { Injectable } from '@angular/core';
import { IWorkout } from '../interfaces/iworkout';
import { WORKOUT_DATA } from '../data/workout-data'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workouts: IWorkout[] = [];

  constructor() {
    this.workouts = WORKOUT_DATA;
  }
  getWorkouts(): IWorkout[] {
    return this.workouts;
  }
}
