import { Injectable, OnInit } from '@angular/core';
import { Folder } from '../model/Folder';
import { Bookmark } from '../model/Bookmark';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';


@Injectable()
export class BookmarksService {
    private bookmarks: Bookmark[] = [];
    private bookmarksObservable: Observable<Bookmark[]> = from([this.bookmarks]);

    constructor() {
        const bookmarks1: Bookmark[] = [
            {
                name: 'Google',
                url: 'http://www.google.com'
            }, {
                name: 'Der Spiegel',
                url: 'http://www.spiegel.de'
            },
            {
                name: 'Yandex',
                url: 'http://www.yandex.ru'
            }, {
                name: 'Lenta',
                url: 'http://www.lenta.ru'
            }
        ];

        bookmarks1.forEach(b => this.bookmarks.push(b));
    }

    public getBookmarksByFolder(folder: Folder): Observable<Bookmark[]> {
        return this.bookmarksObservable;
    }

    public deleteBookmark(bookmark: Bookmark): void {
        let index: number;

        index = this.bookmarks.indexOf(bookmark, 0);
        if (index > -1) {
            this.bookmarks.splice(index, 1);
        }
    }

    addBookmark(newBookmark: Bookmark) {
        this.bookmarks.push(newBookmark);
    }
}
