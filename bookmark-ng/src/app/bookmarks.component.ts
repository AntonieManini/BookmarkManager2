import { Component } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';
import { Folder } from './model/Folder';

@Component({
    selector: 'bookmarks',
    templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent {
    selectedFolder: string;

    constructor(private selectedFolderService: SelectedFolderService) {}

    ngOnInit() {
        this.selectedFolderService.getFolder().subscribe((value: Folder) =>  {
            this.selectedFolder = value.name;
        });
    }
}
