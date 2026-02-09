package com.example.quiz_system.dto;

import java.time.LocalDateTime;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuizSubmissionDTO {

    private String userName;
    private Map<Long, String> answers;
    private LocalDateTime startedAt;
}