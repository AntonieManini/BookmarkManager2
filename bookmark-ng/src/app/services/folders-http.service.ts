import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Folder } from '../model/Folder';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { FoldersService } from './folders.service';

interface FolderResponse {
    folders: Folder[];
}

@Injectable()
export class HttpFoldersService implements FoldersService {
    url = 'http://localhost:8080/folders';
    folders: Folder[] = [];
    foldersObservable: Observable<Folder[]> = from([this.folders]);

    constructor(private http: HttpClient) { }

    getFolders(): Observable<Folder[]> {
        this.http.get<Folder[]>(this.url)
             .subscribe((response: Folder[]) => response.forEach(f => this.folders.push(f)));

        return this.foldersObservable;
    }

    addFolder(folder: Folder): void {
        function replacer(key, value) {
            // Filtering out properties
            if (key === 'parent') {
              return value.folderId;
            }
            return value;
        }

        this.http.post(this.url + '/add', JSON.stringify(folder, replacer), {headers: new HttpHeaders({
            'Content-Type':  'application/json'
          }), observe: 'response'})
            .subscribe((res: HttpResponse<Folder>) => {
                if (res.status === 200 || res.status === 204) {
                  this.folders.push(res.body);
                }
              },
              err => {
                console.log('Error occured');
                console.log(err);
              });
    }

    updateFolder(folder: Folder) {
        const updateUrl: string = this.url + '/' + folder.folderId;
        this.http.put(this.url + '/' + folder.folderId, JSON.stringify(folder), {headers: new HttpHeaders({
            'Content-Type':  'application/json'
          }), observe: 'response'})
        .subscribe(res => {

            },
            err => {
                console.log('Error occured');
                console.log(err);
            });
    }

    removeFolder(folder: Folder): void {
        const deleteUrl: string = this.url + '/' + folder.folderId;
        this.http.delete(deleteUrl, {observe: 'response'})
        .subscribe(res => {
            if (res.status === 200 || res.status === 204) {
                const index = this.folders.indexOf(folder, 0);
                if (index > -1) {
                    this.folders.splice(index, 1);
                }
            }
          },
          err => {
            console.log('Error occured');
            console.log(err);
          });
/*        let index: number;

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
        }*/
    }
}
