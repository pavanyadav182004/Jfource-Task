package com.costemer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.costemer.Entity.Feedback;
import com.costemer.Service.FeedbackSer;

@RestController
@RequestMapping("/feedback")
@CrossOrigin("http://localhost:5173")
public class FeedbackController {

    @Autowired
    
    private FeedbackSer feedbackService;

    // Create
    @PostMapping
    public Feedback addFeedback(@RequestBody Feedback feedback) {
        return feedbackService.addFeedback(feedback);
    }

    // Read All
    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    // Read By Id
    @GetMapping("/{id}")
    public Feedback getFeedbackById(@PathVariable Long id) {
        return feedbackService.getFeedbackById(id);
    }

    // Update
    @PutMapping("/{id}")
    public Feedback updateFeedback(
            @PathVariable Long id,
            @RequestBody Feedback feedback) {

        return feedbackService.updateFeedback(id, feedback);
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteFeedback(@PathVariable Long id) {

        return feedbackService.deleteFeedback(id);
    }
}
