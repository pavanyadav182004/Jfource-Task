package com.costemer.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.costemer.Entity.UserEntity;
import com.costemer.Enums.Role;
import com.costemer.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    // REGISTER USER
    public String register(UserEntity user) {

        // Check if email already exists
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        // Only one ADMIN allowed
        if (user.getRole() == Role.ADMIN &&
                userRepo.existsByRole(Role.ADMIN)) {

            return "Admin already exists";
        }

        userRepo.save(user);

        return "User Registered Successfully";
    }

    // LOGIN
    public String login(String email, String password) {

        UserEntity user = userRepo.findByEmail(email).orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        if (!user.getPassword().equals(password)) {
            return "Invalid Password";
        }

        if (user.getRole() == Role.ADMIN) {
            return "Admin Login Successful";
        }

        return "User Login Successful";
    }

    // GET ALL USERS
    public List<UserEntity> getAllUsers() {
        return userRepo.findAll();
    }

    // GET USER BY ID
    public UserEntity getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    // UPDATE USER
    public UserEntity updateUser(Long id, UserEntity updatedUser) {

        UserEntity user = userRepo.findById(id).orElse(null);

        if (user == null) {
            return null;
        }

        // 
        if (updatedUser.getRole() == Role.ADMIN
                && user.getRole() != Role.ADMIN
                && userRepo.existsByRole(Role.ADMIN)) {

            throw new RuntimeException("Admin already exists");
        }

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setRole(updatedUser.getRole());

        return userRepo.save(user);
    }

    // DELETE USER
    public String deleteUser(Long id) {

        UserEntity user = userRepo.findById(id).orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        userRepo.deleteById(id);

        return "User Deleted Successfully";
    }
}