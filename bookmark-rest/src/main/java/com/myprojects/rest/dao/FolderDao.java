package com.myprojects.rest.dao;

import com.myprojects.rest.model.Folder;

import java.util.List;

public interface FolderDao
{
    Folder get(int folderId);

    void create(Folder folder);

    void update(Folder folder);

    void delete(Folder folder);
}