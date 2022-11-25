import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './consuming-http-services/components/post/post.component';
import { GithubFollowerProfileComponent } from './github-follower-profile/github-follower-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './exercises/github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers/:id', component: GithubFollowerProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'posts', component: PostComponent },
  { path: '**', component: NotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
