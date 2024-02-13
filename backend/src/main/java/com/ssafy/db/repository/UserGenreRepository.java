package com.ssafy.db.repository;

import com.ssafy.db.entity.Genre;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserGenreRepository extends JpaRepository<UserGenre, Long> {
    List<Genre> findGenreIdxByUserIdx(User userIdx);

    @Modifying
    @Query("DELETE FROM UserGenre ug WHERE ug.userIdx = :user")
    void deleteAllRecordsByUserIdx(@Param("user") User user);
}
