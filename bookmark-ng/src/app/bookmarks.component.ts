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
    private bookmarks: Bookmark[];
    newBookmark: Bookmark;

    constructor(private selectedFolderService: SelectedFolderService,
         private bookmarksService: BookmarksService) {}

    ngOnInit() {
        this.selectedFolderService.getFolder().subscribe((value: Folder) => {
            this.selectedFolder = value;
            this.loadBookmarksForFolder();
            this.newBookmark = new Bookmark();
        });
    }

    private loadBookmarksForFolder(): void {
        this.bookmarksService.getBookmarksByFolder(this.selectedFolder)
            .subscribe(b => this.bookmarks = b);
    }

    addBookmark() {
        this.bookmarksService.addBookmark(this.newBookmark);
        this.newBookmark = new Bookmark();
    }
}
