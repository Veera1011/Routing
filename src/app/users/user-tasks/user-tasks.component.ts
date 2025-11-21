import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent  {
  // userId=input.required<string>()
  message = input<string>();
  // private userservice=inject(UsersService);
  // private activated = inject(ActivatedRoute);
  userName= input<string>()
  // private df=inject(DestroyRef)

  // userName=computed(()=>this.userservice.users.find(a => a.id == this.userId())?.name);

  // ngOnInit(): void {
  //   console.log('input data' + this.message);
    
  //    const sub= this.activated.paramMap.subscribe({
  //       next: (paramMap) =>{
  //       this.userName =  this.userservice.users.find(a=>a.id == paramMap.get('userId'))?.name || ''
  //       }
  //     });

  //     this.df.onDestroy(()=>sub.unsubscribe())
  // }

  // ngOnInit(): void {
  //   this.activated.data.subscribe({
  //     next: data =>{
  //       console.log(data);
        
  //     }
  //   })
      
  // }

}


export const resolveUserName:ResolveFn<string> = (activate:ActivatedRouteSnapshot,rs:RouterStateSnapshot) => {

  const userservice = inject(UsersService);
  const userName =  userservice.users.find(a=>a.id == activate.paramMap.get('userId'))?.name || ''
        

        return userName;

      }


      export const resolvetitle:ResolveFn<string> = (activate:ActivatedRouteSnapshot,rs:RouterStateSnapshot) =>{
              return  resolveUserName(activate,rs) + '\ntasks'

      }