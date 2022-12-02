package com.solera.chan.forum_5chan.model;

import org.springframework.stereotype.Component;

@Component
public class ForumPost {
    private String id;
    private String title;
    private String message;
    private String category;
    private boolean visibility;

    public ForumPost() {}

    @Override
    public String toString() {
        return "ForumPost{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", message='" + message + '\'' +
                ", category='" + category + '\'' +
                ", visibility=" + visibility +
                '}';
    }

    public ForumPost(String id, String title, String message, String category, boolean visibility) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.category = category;
        this.visibility = visibility;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }
}
