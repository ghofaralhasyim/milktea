import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostioService } from './services/postio.service';
import { TimelineComponent } from './timeline/timeline.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProfileComponent,
    TimelineComponent,
    FriendlistComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [PostioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
