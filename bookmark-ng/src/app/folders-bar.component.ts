import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';
import { FoldersService } from './services/folders.service';
import { AddNewFolderObservable } from './services/AddNewFolderObservable';

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

    constructor(private selectedFolderService: SelectedFolderService,
                private foldersService: FoldersService,
                private addNewFolderObservable: AddNewFolderObservable) {}

    loadBookmarks(): void {
        if (this.folder != null) {
            this.selectedFolderService.setFolder(this.folder);
        }
    }

    onAdd(): void {
        this.addNewFolderObservable.activate();
        this.selectedFolderService.setFolder(this.folder);
    }

    onEdit(): void {
        this.isEditMode = true;
    }

    onDelete(folder: Folder): void {
        this.foldersService.removeFolder(folder);
    }

    acceptEdit(): void {
        this.isEditMode = false;
    }
}
