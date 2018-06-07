package com.myprojects.bookmarkrest.dao;

import com.myprojects.rest.BookmarkRestApplication;
import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.model.Folder;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = BookmarkRestApplication.class)
@RunWith(SpringRunner.class)
public class FolderDaoTest
{
    @Autowired
    FolderDao folderDao;

    Folder testFolder;

    @After
    public void tearDown() throws Exception
    {
        folderDao.delete(testFolder);
    }

    @Test
    public void testCreate()
    {
        testFolder = new Folder();
        testFolder.setName("Test Folder");

        folderDao.save(testFolder);
    }
}
