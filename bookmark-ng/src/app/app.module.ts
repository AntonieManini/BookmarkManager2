import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoldersComponent } from './folders.component';
import { BookmarksComponent } from './bookmarks.component';
import { UserInfoComponent} from './user-info.component';
import { ExportImportComponent } from './export-import.component';
import { FoldersTreeComponent} from './folders-tree.component';
import { FoldersBarComponent} from './folders-bar.component';

import { SelectedFolderService } from './services/selected-folder.service';
import { BookmarksService } from './services/bookmarks.service';


@NgModule({
  declarations: [
    AppComponent, FoldersComponent,
    BookmarksComponent, UserInfoComponent,
    ExportImportComponent, FoldersTreeComponent, FoldersBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SelectedFolderService, BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
