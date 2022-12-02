package com.solera.chan.forum_5chan.repo;

import com.solera.chan.forum_5chan.model.ForumPost;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RepoImplTest {

    @Autowired
    RepoImpl repoTest;

    private List<ForumPost> fPostList1 = new ArrayList<>();
    private List<ForumPost> fPostList2 = new ArrayList<>();
    ForumPost pst1 = new ForumPost("1", "dia", "3", "4", true);

    @BeforeEach
    void initTest() {
        fPostList2.add(pst1);
        System.out.println("\n\tStarting tests......\n");
    }

    @AfterEach
    void endTest() {
        System.out.println("\n\tEnding tests......\n");
        repoTest.getAllPost().clear();
    }
    @Test
    void addPost_Test() {
        repoTest.addPost(pst1);
        assertEquals(1, repoTest.getAllPost().size());
    }

    @Test
    void getAllPost_Test() {
        assertEquals(fPostList1, repoTest.getAllPost());
        repoTest.addPost(pst1);
        assertEquals(1, repoTest.getAllPost().size());
        assertEquals(fPostList2, repoTest.getAllPost());
    }


}