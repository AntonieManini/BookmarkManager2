package com.myprojects.rest.dao;

import com.myprojects.rest.model.Bookmark;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class BookmarkDaoImpl implements BookmarkDao
{
    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(Bookmark bookmark)
    {
        em.persist(bookmark);
    }

    @Override
    public void update(Bookmark bookmark)
    {
        em.merge(bookmark);
    }

    @Override
    public void delete(Bookmark bookmark)
    {
        Bookmark b = em.find(Bookmark.class, bookmark.getBookmarkId().intValue());
        if (b != null)
        {
            em.remove(b);
        }
    }
}