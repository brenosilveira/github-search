import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './services/user/search.service';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepositoryService } from './services/user/repository.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ResultComponent,
    SearchBarComponent,
    LogoComponent,
    NotFoundComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [ SearchService, RepositoryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
