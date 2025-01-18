package com.tradetrack.repositories;

import com.tradetrack.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Users findUserByName(String user);
    Users findUserByEmail(String email);
}
