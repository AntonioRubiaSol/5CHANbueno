package com.solera.chan.forum_5chan.repo;

import com.solera.chan.forum_5chan.model.ForumPost;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface Repo {
    ForumPost addPost (ForumPost forumPost);
    List<ForumPost> getAllPost ();

}
