import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
];

export const userRoutes: any = RouterModule.forChild(routes);
