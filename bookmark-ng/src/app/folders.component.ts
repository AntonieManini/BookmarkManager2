import { Component } from '@angular/core';
import { Folder } from './model/Folder';

@Component({
    selector: 'folders',
    templateUrl: './folders.component.html'
})
export class FoldersComponent {
/*    folders: Folder[] = [{
        name: 'Folder1',
        children: [{name: 'ChildFolder', children: []}]
    }];*/

    folders: Folder[] = [{
        name: 'Folder1',
        children: []
    }];
}
