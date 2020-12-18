import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'', redirectTo:'home-page',pathMatch: 'full'},
  {path: 'home-page', component: PostComponent,pathMatch: 'full'},
  {path: 'profile-page', component: ProfileComponent,pathMatch: 'full'},
  {path: 'profile-timeline', component: TimelineComponent,pathMatch: 'full'},
  {path: 'profile-friend-list', component: FriendlistComponent,pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
