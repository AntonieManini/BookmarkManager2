package com.myprojects.rest.dao;

import com.myprojects.rest.model.Bookmark;

public interface BookmarkDao
{
    void create(Bookmark bookmark);

    void update(Bookmark bookmark);

    void delete(Bookmark bookmark);
}