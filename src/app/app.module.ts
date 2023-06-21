import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArchiveComponent } from './components/archive/archive.component';
import { BookComponent } from './components/book/book.component';
import { BookService } from './services/book.service';

const appRoutes: Routes = [
  { path: '', component: BookComponent },
  { path: 'archive', component: ArchiveComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
