import { Component, OnInit, ViewChild } from '@angular/core';
import { IWorkout } from './interfaces/iworkout';
import { WorkoutService } from './services/workout.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['workout', 'sets', 'reps', 'weight'];
  dataSource: MatTableDataSource<IWorkout>;

  constructor(private workoutService: WorkoutService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

ngOnInit() {
  this.dataSource = new MatTableDataSource(this.workoutService.getWorkouts());
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
