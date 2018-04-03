import { Component } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';
import { BookmarksService } from './services/bookmarks.service';
import { Folder } from './model/Folder';
import { Bookmark } from './model/Bookmark';

@Component({
    selector: 'bookmarks',
    templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent {
    selectedFolder: Folder;
    public bookmarks: Bookmark[];

    constructor(private selectedFolderService: SelectedFolderService,
         private bookmarksService: BookmarksService) {}

    ngOnInit() {
        this.selectedFolderService.getFolder().subscribe((value: Folder) => {
            this.selectedFolder = value;
            this.loadBookmarksForFolder();
        });
    }

    private loadBookmarksForFolder(): void {
        this.bookmarks = this.bookmarksService.getBookmarksByFolder(this.selectedFolder);
    }
}
