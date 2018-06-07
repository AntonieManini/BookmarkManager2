package com.myprojects.rest.dao;

import com.myprojects.rest.model.Bookmark;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookmarkDao extends CrudRepository<Bookmark, Long>
{
    List<Bookmark> findByFolderFolderId(int id);
}