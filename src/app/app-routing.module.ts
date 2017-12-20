import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/general/page/page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ActiveServiceResolver } from './resolvers/active-service.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'emails/list', pathMatch: 'full' },
  {
    path: ':type',
    component: PageComponent,
    resolve: {
      activeService: ActiveServiceResolver,
    },
    children: [
      { path: 'list', component: ListPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
