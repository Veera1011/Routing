import { CanMatchFn, RedirectCommand, Route, Router, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolvetitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import {routes as newro} from "./users/users.routes"
import { inject } from "@angular/core";

const dummymath: CanMatchFn = (route,segments) =>{
    const router =inject(Router)
    const getaccess = Math.random();
    if(getaccess < 0.5){
        return true;
    }
    return new RedirectCommand(router.parseUrl('/una'));

}

export const routes:Routes=[
    {
        path:'',
        component: NoTaskComponent,
        title:'no user selected'
    },

    {
        path:'users/:userId',
        component: UserTasksComponent,
        children: newro,
      //  canMatch:[dummymath],
        data:{
            message:'User Data'
        },
        resolve: {
            userName : resolveUserName
        },
        title:resolvetitle
    },
     {
            path:'**',
            component:NotfoundComponent
        }
]