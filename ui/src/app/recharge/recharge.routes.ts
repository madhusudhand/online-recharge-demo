import { RouterModule, Routes } from '@angular/router';

import { RechargeComponent } from './recharge.component';
import { MobileComponent } from './mobile.component';
import { ComingSoonComponent } from './comingsoon.component';
import { RechargeHistoryComponent } from './recharge-history.component';
import { PaymentComponent } from './payment.component';
import { WrapperComponent } from './wrapper.component';
import { FeedbackComponent } from './feedback.component';
import { RechargeService } from './services/recharge.service';
import { DthComponent } from './dth.component/dth.component';

const routes: Routes = [
  {
    path: 'recharge',
    component: RechargeComponent,
    children: [
      {
        path: '',
        redirectTo: 'mobile',
        pathMatch: 'full'
      },
      {
        path: 'mobile',
        component: WrapperComponent,
        children: [
          {
            path: '',
            component: MobileComponent
          },
          {
            path: 'pay',
            component: PaymentComponent
          }
        ]
      },
      {
        path: 'dth',
        component: WrapperComponent,
        children: [
          {
            path: '',
            component: DthComponent
          },
          {
            path: 'pay',
            component: PaymentComponent
          }
        ]
      },
      {
        path: 'bill-pay',
        component: WrapperComponent,
        children: [
          {
            path: '',
            component: ComingSoonComponent
          },
          {
            path: 'pay',
            component: PaymentComponent
          }
        ]
      },
      {
        path: 'history',
        component: RechargeHistoryComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },
    ],
  },
];

export const rechargeRoutes = RouterModule.forChild(routes);
export const rechargeRouteProviders : any[] = [
  RechargeService
];
