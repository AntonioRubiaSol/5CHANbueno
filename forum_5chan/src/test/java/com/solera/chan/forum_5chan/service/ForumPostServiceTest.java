package com.solera.chan.forum_5chan.service;

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
class ForumPostServiceTest {

    @Autowired
    ForumPostService serviceTest;

    private List<ForumPost> fPostList1 = new ArrayList<>();
    private List<ForumPost> fPostList2 = new ArrayList<>();
    private List<ForumPost> fPostList3 = new ArrayList<>();
    ForumPost pst0 = null;
    ForumPost pst1 = new ForumPost("1", "dia", "3", "4", true);
    ForumPost pst2 = new ForumPost("5", "mundial", "7", "8", false);
    ForumPost pst3 = new ForumPost("1", "dia", "33", "44", true);
    ForumPost pst4 = new ForumPost("5", "dia", "7", "8", false);

    @BeforeEach
    void initTest() {
        fPostList2.add(pst1);
        fPostList3.add(pst1);
        fPostList3.add(pst2);
        fPostList3.add(pst3);
        System.out.println("\n\tStarting tests......\n");
    }

    @AfterEach
    void endTest() {
        System.out.println("\n\tEnding tests......\n");
        serviceTest.getAllPost().clear();
    }

    @Test
    void addPost_Good_Test() {
        assertEquals(0, serviceTest.getAllPost().size());
        serviceTest.addPost(pst1);
        assertEquals(1, serviceTest.getAllPost().size());
        assertEquals(fPostList2, serviceTest.getAllPost());
    }

    @Test
    void addPost_BadPost_Test() {
        assertEquals(0, serviceTest.getAllPost().size());
        serviceTest.addPost(pst2);
        assertEquals(0, serviceTest.getAllPost().size());
        assertEquals(fPostList1, serviceTest.getAllPost());
    }

    @Test
    void addPost_Null_Test() {
        assertEquals(0, serviceTest.getAllPost().size());
        serviceTest.addPost(pst0);
        assertEquals(0, serviceTest.getAllPost().size());
        assertEquals(fPostList1, serviceTest.getAllPost());
    }

    @Test
    void getAllPost_Test() {
        assertEquals(fPostList1, serviceTest.getAllPost());
        serviceTest.addPost(pst1);
        assertEquals(1, serviceTest.getAllPost().size());
        assertEquals(fPostList2, serviceTest.getAllPost());
    }


    @Test
    void validTitle_True_Test() {
        assertTrue(serviceTest.validTitle(pst1));
    }

    @Test
    void validTitle_False_Test() {
        assertFalse(serviceTest.validTitle(pst2));
    }

    @Test
    void repeatedTitle_False_Test() {
        serviceTest.addPost(pst1);
        serviceTest.addPost(pst4);
        assertFalse(serviceTest.repeatedTitleInThread(pst1));
    }

    @Test
    void repeatedTitle_True_Test() {
        serviceTest.addPost(pst1);
        assertTrue(serviceTest.repeatedTitleInThread(pst3));
    }
}