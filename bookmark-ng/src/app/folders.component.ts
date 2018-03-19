import { Component } from '@angular/core';
import { Folder } from './model/Folder';

@Component({
    selector: 'folders',
    templateUrl: './folders.component.html',
    styles: ['ul { list-style-type: none; }']
})
export class FoldersComponent {
/*    folders: Folder[] = [{
        name: 'Folder1',
        children: [{name: 'ChildFolder', children: []}]
    }];*/

    folders: Folder[] = [{
        name: 'Folder1',
        children: [{
            name: 'Sub11',
            children: []
        }, {
            name: 'Sub12',
            children: []
        }]
    }, {
        name: 'Folder2',
        children: [{
            name: 'Sub21',
            children: [{
                name: 'SubSub211',
                children: []
            }]
        }]
    }];
}
