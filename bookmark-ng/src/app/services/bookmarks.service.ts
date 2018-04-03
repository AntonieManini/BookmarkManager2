import { Injectable } from '@angular/core';
import { Folder } from '../model/Folder';
import { Bookmark } from '../model/Bookmark';

@Injectable()
export class BookmarksService {
    public getBookmarksByFolder(folder: Folder): Bookmark[] {
        const bookmarks1: Bookmark[] = [
            {
                name: 'Google',
                url: 'http://www.google.com'
            }, {
                name: 'Der Spiegel',
                url: 'http://www.spiegel.de'
            }
        ];
        const bookmarks2: Bookmark[] = [
            {
                name: 'Yandex',
                url: 'http://www.yandex.ru'
            }, {
                name: 'Lenta',
                url: 'http://www.lenta.ru'
            }
        ];

        return folder.name.indexOf('Folder') === 0 ? bookmarks1 : bookmarks2;
    }
}
