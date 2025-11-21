import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, ResolveFn, RouterLink } from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId =input.required<string>();
  order = signal<'asc' | 'desc'>('desc');
  // private tasksservice=inject(TasksService)
  userTasks = input<any>();
  
// userTasks = computed(() => 
//   this.tasksservice.allTasks()
//     .filter(a => a.userId === this.userId())
//     .sort((a, b) => {
//       if (this.order() === 'desc') {
//         return a.id > b.id ? -1 : 1;
//       } else {
//         return a.id > b.id ? 1 : -1;
//       }
//     })
// );



  //  private ac= inject(ActivatedRoute);
  //  private df =inject(DestroyRef);

  //  ngOnInit(): void {
  //     const sub= this.ac.queryParams.subscribe({
  //       next: pa =>{
  //         this.order.set(pa['order'])
  //       }
  //      });
  //      this.df.onDestroy(()=> sub.unsubscribe())
  //  }

}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
