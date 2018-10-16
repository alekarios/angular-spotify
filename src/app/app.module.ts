import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { DummyComponent } from './dummy/dummy.component';
import { CurrentTrackComponent } from './current-track/current-track.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    DummyComponent,
    CurrentTrackComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'user/:id', component: UserPageComponent},
      {path: 'track/:trackName/:artistName', component: CurrentTrackComponent}
    ]),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
