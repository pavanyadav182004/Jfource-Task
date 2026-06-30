package com.costemer.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {
	
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	   

	    @Column(length = 1000)
	    private String feedback;
        

		private LocalDate date;

	    // Constructor
	    public Feedback() {
	        this.date = LocalDate.now();
	    }

	    // Getter Setter
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	   
	    
	    public String getFeedback() {
	        return feedback;
	    }

	    public void setFeedback(String feedback) {
	        this.feedback = feedback;
	    }

	    public LocalDate getDate() {
	        return date;
	    }

	    public void setDate(LocalDate date) {
	        this.date = date;
	    }
    
    
}

