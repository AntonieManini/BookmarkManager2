import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoldersComponent } from './folders.component';
import { BookmarksComponent } from './bookmarks.component';
import { UserInfoComponent} from './user-info.component';
import { ExportImportComponent } from './export-import.component';


@NgModule({
  declarations: [
    AppComponent, FoldersComponent, BookmarksComponent, UserInfoComponent, ExportImportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
