package com.costemer.Repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.costemer.Entity.UserEntity;
import com.costemer.Enums.Role;

@Repository
public interface UserRepository extends JpaRepository<UserEntity ,Long > {

	Optional<UserEntity> findByEmail(String email);
	
	boolean existsByRole(Role role);



	
}
