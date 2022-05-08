import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TrendingPropertiesComponent } from './trending-properties/trending-properties.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { ShowPropertiesComponent } from './show-properties/show-properties.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'home', component :HomeComponentComponent},
  {path : 'trendingProp', component : TrendingPropertiesComponent},
  {path : 'viewProperty/:id', component : ViewPropertyComponent},
  {path : 'showProperites/:type/:location/:buy/:rent', component : ShowPropertiesComponent},
  {path : 'submit', component : SubmitPropertyComponent},
  {path : 'register', component : RegisterComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
