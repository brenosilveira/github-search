import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultComponent } from './pages/result/result.component';
import { RepositoryResolver } from './shared/resolvers/repository.resolver';
import { SearchResolver } from './shared/resolvers/search.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result/:name', resolve:{ state: SearchResolver } , component: ResultComponent, children: [
    {path: '', component: RepositoriesComponent, resolve:{ repositories: RepositoryResolver} }
  ]},
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
