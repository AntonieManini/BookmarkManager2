package com.myprojects.rest.dao;

import com.myprojects.rest.model.Bookmark;
import org.springframework.data.repository.CrudRepository;

public interface BookmarkDao extends CrudRepository<Bookmark, Long>
{
}