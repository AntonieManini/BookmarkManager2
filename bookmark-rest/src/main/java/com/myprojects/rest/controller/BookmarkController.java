package com.myprojects.rest.controller;

import com.myprojects.rest.dao.BookmarkDao;
import com.myprojects.rest.model.Bookmark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController
{
    @Autowired
    BookmarkDao bookmarkDao;

    @GetMapping("/{id}")
    public List<Bookmark> getFolderBookmarks(@PathVariable int id) {
        return bookmarkDao.findByFolderFolderId(id);
    }
}
