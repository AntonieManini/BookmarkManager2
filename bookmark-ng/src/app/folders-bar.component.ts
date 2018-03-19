import { Component } from '@angular/core';
import { Folder } from './model/Folder';
import { Input } from '@angular/core';

@Component({
    selector: 'folders-bar',
    templateUrl: './folders-bar.component.html',
    styleUrls: ['./folders-bar.component.css']
})
export class FoldersBarComponent {
    @Input()
    folderName: string;
    showControls: boolean = false;
}
