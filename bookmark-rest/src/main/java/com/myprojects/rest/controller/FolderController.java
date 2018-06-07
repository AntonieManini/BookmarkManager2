package com.myprojects.rest.controller;

import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.model.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/folders")
public class FolderController
{
    @Autowired
    FolderDao folderDao;

    @GetMapping
    public List<Folder> getFolders() {
        return (List<Folder>) folderDao.findAll();
    }

    @PostMapping("/add")
    public boolean addFolder(@RequestBody Folder folder) {
        try {
            folderDao.save(folder);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean updateFolder(@RequestBody Folder folder) {
        return true;
    }

    @DeleteMapping("/{id}")
    public boolean deleteFolder(@PathVariable long id) {
        try {
            folderDao.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
