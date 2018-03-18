import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';

@Component({
    selector: 'folders-bar',
    templateUrl: './folders-bar.component.html',
    styles: ['.folders-bar {width:250px; height:50px; background-color:blue} .folder-name {float:left} .folder-controls{float:right}']
})
export class FoldersBarComponent {
    @Input()
    folderName: string;
    showControls: boolean = false;
}
