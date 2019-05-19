import { Observable } from 'rxjs/Observable';
import { Folder } from '../model/Folder';

export abstract class FoldersService {
    abstract getFolders(): Observable<Folder[]>;
    abstract addFolder(folder: Folder): void;
    abstract updateFolder(folder: Folder): void;
    abstract removeFolder(folder: Folder): void;
}
