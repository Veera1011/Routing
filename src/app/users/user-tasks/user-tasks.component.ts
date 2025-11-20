import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent implements OnInit {
  // userId=input.required<string>()
  private userservice=inject(UsersService);
  private activated = inject(ActivatedRoute);
  userName='';
  private df=inject(DestroyRef)

  // userName=computed(()=>this.userservice.users.find(a => a.id == this.userId())?.name);

  ngOnInit(): void {
     const sub= this.activated.paramMap.subscribe({
        next: (paramMap) =>{
        this.userName =  this.userservice.users.find(a=>a.id == paramMap.get('userId'))?.name || ''
        }
      });

      this.df.onDestroy(()=>sub.unsubscribe())
  }

}
