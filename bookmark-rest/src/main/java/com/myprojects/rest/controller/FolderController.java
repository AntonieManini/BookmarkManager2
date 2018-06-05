package com.myprojects.rest.controller;

import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.model.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FolderController
{
    @Autowired
    FolderDao folderDao;

    @GetMapping("/folders")
    @ResponseBody
    public List<Folder> getFolders() {
        return (List<Folder>) folderDao.findAll();
    }

    @PostMapping("/folder/add")
    @ResponseBody
    public boolean addFolder(@RequestParam String name) {
        Folder folder = new Folder();
        folder.setName(name);

        try {
            folderDao.save(folder);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/folder/{id}")
    @ResponseBody
    public boolean updateFolder(@RequestBody Folder folder) {
        return true;
    }

    @DeleteMapping("/folder/{id}")
    public boolean deleteFolder(@PathVariable long id) {
        try {
            folderDao.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
