import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    userRoutes,
  ],
  declarations: [
    UserProfileComponent,
  ],
  providers: [

  ]
})
export class UserModule {}
