package com.myprojects.bookmarkrest.dao;

import com.myprojects.rest.BookmarkRestApplication;
import com.myprojects.rest.dao.BookmarkDao;
import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.model.Bookmark;
import com.myprojects.rest.model.Folder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BookmarkRestApplication.class)
public class BookmarkDaoTest
{
    @Autowired
    BookmarkDao bookmarkDao;

    @Autowired
    FolderDao folderDao;

    Folder testFolder;
    Bookmark testBookmark;

    @Before
    public void setUp() throws Exception
    {
        testFolder = new Folder();
        testFolder.setName("Test");

        folderDao.save(testFolder);
    }

    @After
    public void tearDown() throws Exception
    {
        if (testBookmark != null) bookmarkDao.delete(testBookmark);
        if (testFolder != null) folderDao.delete(testFolder);
    }

    @Test
    public void testCreateBookmark()
    {
        testBookmark = new Bookmark();
        testBookmark.setDesc("Test description");
        testBookmark.setUrl("http://www.google.com");
        testBookmark.setFolder(testFolder);

        bookmarkDao.save(testBookmark);
    }

    @Test
    public void testFindByFolderIdPositive() {
        String description = "Test description";
        String url = "http://www.google.com";

        testBookmark = new Bookmark();
        testBookmark.setDesc(description);
        testBookmark.setUrl(url);
        testBookmark.setFolder(testFolder);

        bookmarkDao.save(testBookmark);

        List<Bookmark> bookmarks = bookmarkDao.findByFolderFolderId(testFolder.getFolderId());
        assertNotNull(bookmarks);
        assertEquals(1, bookmarks.size());
        assertEquals(description, bookmarks.get(0).getDesc());
        assertEquals(url, bookmarks.get(0).getUrl());
    }

    @Test
    public void testFindByFolderIdNegative() {
        List<Bookmark> bookmarks = bookmarkDao.findByFolderFolderId(0);
        assertNotNull(bookmarks);
        assertEquals(0, bookmarks.size());
    }
}
