import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';

@Component({
    selector: 'app-folders-tree',
    templateUrl: './folders-tree.component.html',
    styles: ['ul { list-style-type: none; }']
})
export class FoldersTreeComponent {
    @Input()
    folders: Folder[];

    public showButton: boolean = false;

    constructor(private selectedFolderService: SelectedFolderService) {}

    loadBookmarks(selectedFolder: Folder): void {
        this.selectedFolderService.setFolder(selectedFolder);
    }

    switchButtonOn() {
        this.showButton = true;
    }
}
