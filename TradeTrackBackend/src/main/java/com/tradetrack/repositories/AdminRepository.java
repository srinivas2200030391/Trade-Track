package com.tradetrack.repositories;

import com.tradetrack.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findAdminByName(String username);
    Admin findAdminByEmail(String email);
}
