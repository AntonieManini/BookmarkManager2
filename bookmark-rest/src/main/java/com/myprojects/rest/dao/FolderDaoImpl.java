package com.myprojects.rest.dao;

import com.myprojects.rest.model.Folder;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class FolderDaoImpl implements FolderDao
{
    @PersistenceContext
    private EntityManager em;

    @Override
    public Folder get(int folderId)
    {
        return em.find(Folder.class, folderId);
    }

    @Override
    public void create(Folder folder)
    {
        em.persist(folder);
    }

    @Override
    public void update(Folder folder)
    {
        em.merge(folder);
    }

    @Override
    public void delete(Folder folder)
    {
        Folder f = em.find(Folder.class, folder.getFolderId().intValue());
        if (f != null)
        {
            em.remove(f);
        }
    }
}