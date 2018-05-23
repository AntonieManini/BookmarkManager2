import { Observable } from 'rxjs/Observable';
import { Injectable, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddNewFolderObservable {
    private addNewFolderMode: Subject<Boolean> = new Subject();

    ngOnInit() {
        this.addNewFolderMode.next(false);
    }

    getObservable(): Observable<Boolean> {
        return this.addNewFolderMode;
    }

    activate(): void {
        this.addNewFolderMode.next(true);
    }

    deactivate(): void {
        this.addNewFolderMode.next(false);
    }
}