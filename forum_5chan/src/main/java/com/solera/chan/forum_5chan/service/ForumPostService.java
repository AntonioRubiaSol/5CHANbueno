package com.solera.chan.forum_5chan.service;

import com.solera.chan.forum_5chan.model.ForumPost;
import com.solera.chan.forum_5chan.repo.RepoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumPostService {
    @Autowired
    RepoImpl repo;

    String[] bannedWords = {"mundial", "terrorismo", "francia", "nazi" , "comunismo", "hitler"};

    public ForumPost addPost(ForumPost forumPost) {
        if (forumPost == null)
            return null;
        if (validTitle(forumPost) && !repeatedTitleInThread(forumPost))
            return repo.addPost(forumPost);
        return null;
    }

    public List<ForumPost> getAllPost() {
        return repo.getAllPost();
    }

    public boolean validTitle(ForumPost forumPost) {
        for (String badWord : bannedWords)
            if (forumPost.getTitle().toLowerCase().contains(badWord))
                return false;
        return true;
    }

    public boolean repeatedTitleInThread(ForumPost forumPost) {
        for (ForumPost fp: repo.getAllPost())
            if (fp != forumPost)
                if (forumPost.getId().equals(fp.getId()))
                    if (forumPost.getTitle().equals(fp.getTitle()))
                        return true;
        return false;
    }

}
