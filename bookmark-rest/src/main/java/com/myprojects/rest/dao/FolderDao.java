package com.myprojects.rest.dao;

import com.myprojects.rest.model.Folder;
import org.springframework.data.repository.CrudRepository;

public interface FolderDao extends CrudRepository<Folder, Long>
{
}