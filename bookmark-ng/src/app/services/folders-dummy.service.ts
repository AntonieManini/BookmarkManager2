import { Injectable, OnInit } from '@angular/core';
import { Folder } from '../model/Folder';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { FoldersService } from './folders.service';


@Injectable()
export class DummyFoldersService implements FoldersService {
    folders: Folder[] = [];
    foldersObservable: Observable<Folder[]> = from([this.folders]);

    constructor() {
        const folder1: Folder = {folderId: null, name: 'Folder1', children: [], parent: null};
        const subFolder11: Folder = {folderId: null, name: 'Sub11', children: [], parent: folder1};
        const subFolder12: Folder = {folderId: null, name: 'Sub12', children: [], parent: folder1};
        folder1.children.push(subFolder11, subFolder12);

        const folder2: Folder = {folderId: null, name: 'Folder2', children: [], parent: null};
        const subFolder21: Folder = {folderId: null, name: 'Sub21', children: [], parent: folder2};
        const subFolder22: Folder = {folderId: null, name: 'Sub22', children: [], parent: folder2};
        folder2.children.push(subFolder21, subFolder22);


        this.folders.push(folder1, folder2);
    }

    getFolders(): Observable<Folder[]> {
        return this.foldersObservable;
    }

    addFolder(folder: Folder): void {
        if (!folder.parent) {
            this.folders.push(folder);
        }
    }
    
    updateFolder(folder: Folder) {

    }

    removeFolder(folder: Folder): void {
        let index: number;

        if (folder.parent != null) {
            index = folder.parent.children.indexOf(folder, 0);
            if (index > -1) {
                folder.parent.children.splice(index, 1);
            }
        } else {
            index = this.folders.indexOf(folder, 0);
            if (index > -1) {
                this.folders.splice(index, 1);
            }
        }
    }
}
