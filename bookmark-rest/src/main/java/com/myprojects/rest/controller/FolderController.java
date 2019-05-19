package com.myprojects.rest.controller;

import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.dto.FolderDto;
import com.myprojects.rest.model.Folder;
import com.myprojects.rest.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/folders")
public class FolderController
{
    @Autowired
    FolderDao folderDao;

    @Autowired
    FolderService folderService;

    @GetMapping
    public List<Folder> getFolders() {
        return (List<Folder>) folderDao.findAll();
    }

    @PostMapping(value = "/add", consumes = "application/json")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public Folder addFolder(@RequestBody FolderDto folderDto) {
        return folderService.save(folderDto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void updateFolder(@RequestBody Folder folder) {
        folderDao.save(folder);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteFolder(@PathVariable long id) {
        folderDao.delete(id);
    }
}
