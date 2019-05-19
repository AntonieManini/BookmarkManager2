package com.myprojects.rest.service;

import com.myprojects.rest.dao.FolderDao;
import com.myprojects.rest.dto.FolderDto;
import com.myprojects.rest.model.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FolderService {

    @Autowired
    FolderDao folderDao;

    public Folder save(FolderDto folderDto) {
        if (folderDto.getFolderId() == 0) {
            return addFolder(folderDto);
        } else {
            return updateFolder(folderDto);
        }
    }

    private Folder updateFolder(FolderDto folderDto) {
        Folder folder = null;
        Folder parent = null;

        if (folderDto.getFolderId() != null) {
            folder = folderDao.findOne(folderDto.getFolderId());

            if (folder == null) {
                throw new IllegalArgumentException("Folder for update was not found");
            }
        }

        if (folderDto.getParentId() != null) {
            parent = folderDao.findOne(folderDto.getParentId());
            if (parent == null) {
                throw new IllegalArgumentException("Parent folder was not found");
            }
        }

        folder.setName(folderDto.getName());
        folder.setParent(parent);
        folderDao.save(folder);


        if (parent != null) {
            parent.addChild(folder);
            folderDao.save(parent);
        }

        return folder;
    }

    private Folder addFolder(FolderDto folderDto) {
        Folder folder = new Folder();
        Folder parent = null;

        if (folderDto.getParentId() != null) {
            parent = folderDao.findOne(folderDto.getParentId());
        }

        folder.setName(folderDto.getName());
        folder.setParent(parent);

        return folderDao.save(folder);
    }
}
