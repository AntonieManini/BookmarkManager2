package com.myprojects.rest.model;

import javax.persistence.*;

@Entity
@Table(name="BOOKMARK")
public class Bookmark {
    private Integer bookmarkId;
    private String desc;
    private String url;
    private Folder folder;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="BOOKMARK_ID")
    public Integer getBookmarkId() {
        return bookmarkId;
    }
    public void setBookmarkId(Integer bookmarkId) {
        this.bookmarkId = bookmarkId;
    }

    @Column(name="DESCRIPTION", length=200, nullable=false)
    public String getDesc() {
        return desc;
    }
    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Column(name="URL", length=1024, nullable=false)
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="FOLDER_ID")
    public Folder getFolder() {
        return folder;
    }
    public void setFolder(Folder folder) {
        this.folder = folder;
    }
}
