import { Bookmark } from './model/Bookmark';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import {BookmarksService} from './services/bookmarks.service';

@Component({
    selector: 'bookmark-bar',
    templateUrl: './bookmark-bar.component.html',
    styleUrls: ['./bookmark-bar.component.css']
})
export class BookmarkBarComponent {
    @Input()
    bookmark: Bookmark;

    showControls: boolean = false;
    isEditMode: boolean = false;

    constructor(private bookmarkService: BookmarksService) {}

    onEdit(): void {
        this.isEditMode = true;
    }

    onDelete(bookmark: Bookmark): void {
        this.bookmarkService.deleteBookmark(bookmark);
    }

    acceptChanges(): void {
        this.isEditMode = false;
    }
}
