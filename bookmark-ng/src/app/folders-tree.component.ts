import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';
import { SelectedFolderService } from './services/selected-folder.service';
import { AddNewFolderObservable } from './services/AddNewFolderObservable';
import { FoldersService } from './services/folders.service';

@Component({
    selector: 'app-folders-tree',
    templateUrl: './folders-tree.component.html',
    styles: ['ul { list-style-type: none; }']
})
export class FoldersTreeComponent {
    @Input()
    folders: Folder[];
    newFolder: Folder = new Folder();
    selectedFolder: Folder;

    addNewFolderMode: boolean = false;

    constructor(private selectedFolderService: SelectedFolderService,
                private addNewFolderObservable: AddNewFolderObservable,
                private foldersService: FoldersService) {
        this.addNewFolderObservable.getObservable()
            .subscribe(o => this.addNewFolderMode = o.valueOf());

        this.selectedFolderService.getFolder()
            .subscribe(f => this.selectedFolder = f);
    }

    loadBookmarks(selectedFolder: Folder): void {
        this.selectedFolderService.setFolder(selectedFolder);
    }

    onSave(): void {
        this.newFolder.parent = this.selectedFolder;
        if (!this.selectedFolder.children) {
            this.selectedFolder.children = [];
        }
        this.selectedFolder.children.push(this.newFolder);
        this.foldersService.addFolder(this.newFolder);
        this.newFolder = new Folder();
        this.addNewFolderObservable.deactivate();
    }

    isCurrentFolder(node: Folder): boolean {
        return node === this.selectedFolder;
    }

    isVisible(node: Folder): boolean {
        return this.addNewFolderMode && this.isCurrentFolder(node);
    }

}
