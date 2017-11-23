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

        folderDao.create(testFolder);
    }

    @After
    public void tearDown() throws Exception
    {
        bookmarkDao.delete(testBookmark);
        folderDao.delete(testFolder);
    }

    @Test
    public void testCreateBookmark()
    {
        testBookmark = new Bookmark();
        testBookmark.setDesc("Test description");
        testBookmark.setUrl("http://www.google.com");
        testBookmark.setFolder(testFolder);

        bookmarkDao.create(testBookmark);
    }
}
