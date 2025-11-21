import { Routes } from "@angular/router";
import { TaskComponent } from "../tasks/task/task.component";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { canleave, NewTaskComponent } from "../tasks/new-task/new-task.component";

NewTaskComponent

export const routes:Routes=[
          {
             path:'',
             redirectTo:'tasks',
             pathMatch:'prefix'
          },
            {
                path:'tasks',
                component:TasksComponent,
                runGuardsAndResolvers:'always',
                 resolve: {
      userTasks: resolveUserTasks,
    },

            },
            {
                path:'tasks/new',
                component:NewTaskComponent,
                canDeactivate:[canleave]
            }
        ]