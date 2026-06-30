package com.costemer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.costemer.Entity.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Long>{

}
