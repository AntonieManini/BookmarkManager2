import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';

@Component({
    selector: 'folders-bar',
    templateUrl: './folders-bar.component.html',
    styleUrls: ['./folders-bar.component.css']
})
export class FoldersBarComponent {
    @Input()
    folder: Folder;
    showControls: boolean = false;
    isEditMode: boolean = false;

    constructor(private selectedFolderService: SelectedFolderService) {}

    loadBookmarks(): void {
        if (this.folder != null) {
            this.selectedFolderService.setFolder(this.folder);
        }
    }

    onEdit(): void {
        this.isEditMode = true;
    }

    acceptEdit(): void {
        this.isEditMode = false;
    }
}
