import { Component, OnInit } from '@angular/core';
import { Folder } from './model/Folder';
import { FoldersService } from './services/folders.service';

@Component({
    selector: 'folders',
    templateUrl: './folders.component.html',
    styles: ['ul { list-style-type: none; }']
})
export class FoldersComponent {

    constructor(private folderService: FoldersService) {}

    folders: Folder[];
    newFolder: Folder = new Folder();

    ngOnInit() {
        this.getFolders();
    }

    getFolders(): void {
        this.folderService.getFolders().subscribe(f => { this.folders = f as Folder[] });
    }

    onAdd() {
        this.folderService.addFolder(this.newFolder);
        this.newFolder = new Folder();
    }
}
