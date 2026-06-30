package com.costemer.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.costemer.Entity.Feedback;
import com.costemer.Repository.FeedbackRepo;

@Service
public class FeedbackSer {
	 @Autowired
	    private FeedbackRepo feedbackRepository;

	    // Add Feedback
	    public Feedback addFeedback(Feedback feedback) {
	        return feedbackRepository.save(feedback);
	    }

	    // Get All Feedback
	    public List<Feedback> getAllFeedback() {
	        return feedbackRepository.findAll();
	    }

	    // Get Feedback By Id
	    public Feedback getFeedbackById(Long id) {
	        return feedbackRepository.findById(id).orElse(null);
	    }

	    // Update Feedback
	    public Feedback updateFeedback(Long id, Feedback feedback) {

	        Feedback db = feedbackRepository.findById(id).orElse(null);

	        if(db != null) {
	            
	            db.setFeedback(feedback.getFeedback());

	            return feedbackRepository.save(db);
	        }

	        return null;
	    }

	    // Delete Feedback
	    public String deleteFeedback(Long id) {

	        feedbackRepository.deleteById(id);

	        return "Feedback Deleted Successfully";
	    }

}
