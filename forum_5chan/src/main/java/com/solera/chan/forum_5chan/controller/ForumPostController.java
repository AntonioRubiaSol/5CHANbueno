package com.solera.chan.forum_5chan.controller;

import com.solera.chan.forum_5chan.model.ForumPost;
import com.solera.chan.forum_5chan.service.ForumPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ForumPostController {

    @Autowired
    ForumPostService service;

    @GetMapping()
    public ResponseEntity<List<ForumPost>> getAllPost() throws Exception {
        return new ResponseEntity<>(service.getAllPost(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ForumPost> addPost(@RequestBody ForumPost forumPost) throws Exception {
        return new ResponseEntity<>(service.addPost(forumPost), HttpStatus.OK);
    }

}
