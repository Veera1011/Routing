import { Route, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import {routes as newro} from "./users/users.routes"
export const routes:Routes=[
    {
        path:'',
        component: NoTaskComponent,
    },

    {
        path:'users/:userId',
        component: UserTasksComponent,
        children: newro
    },
     {
            path:'**',
            component:NotfoundComponent
        }
]