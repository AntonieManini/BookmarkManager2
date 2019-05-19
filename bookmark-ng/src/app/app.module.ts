import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoldersComponent } from './folders.component';
import { BookmarksComponent } from './bookmarks.component';
import { UserInfoComponent} from './user-info.component';
import { ExportImportComponent } from './export-import.component';
import { FoldersTreeComponent} from './folders-tree.component';
import { FoldersBarComponent} from './folders-bar.component';
import { BookmarkBarComponent } from './bookmark-bar.component';

import { SelectedFolderService } from './services/selected-folder.service';
import { BookmarksService } from './services/bookmarks.service';
import { FoldersService } from './services/folders.service';
import { DummyFoldersService } from './services/folders-dummy.service';
import { HttpFoldersService } from './services/folders-http.service';
import { AddNewFolderObservable } from './services/AddNewFolderObservable';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, FoldersComponent,
    BookmarksComponent, UserInfoComponent,
    ExportImportComponent, FoldersTreeComponent, FoldersBarComponent,
    BookmarkBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SelectedFolderService, BookmarksService, {provide: FoldersService, useClass: HttpFoldersService}, AddNewFolderObservable],
  bootstrap: [AppComponent]
})
export class AppModule { }
