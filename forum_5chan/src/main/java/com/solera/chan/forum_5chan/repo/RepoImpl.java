package com.solera.chan.forum_5chan.repo;

import com.solera.chan.forum_5chan.model.ForumPost;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Repository
public class RepoImpl implements Repo{

    private List<ForumPost> fPostList = new ArrayList<>();

    @Override
    public ForumPost addPost(ForumPost forumPost) {
        fPostList.add(forumPost);
        return forumPost;
    }

    @Override
    public List<ForumPost> getAllPost() {
        return fPostList;
    }

}
