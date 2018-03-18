import { Injectable } from '@angular/core';
import { Folder } from '../model/Folder';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SelectedFolderService {
    private folderSubject: Subject<Folder> = new Subject();
    private selectedFolder: Observable<Folder> = this.folderSubject.asObservable();

    setFolder(selectedFolder: Folder): void {
        this.folderSubject.next(selectedFolder);
    }

    getFolder(): Observable<Folder> {
        return this.selectedFolder;
    }
}
