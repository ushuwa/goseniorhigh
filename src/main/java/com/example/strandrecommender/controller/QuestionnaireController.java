package com.example.strandrecommender.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class QuestionnaireController {

    static class Question {
        public String key;
        public String text;
        public List<String> strands;

        public Question(String key, String text, List<String> strands) {
            this.key = key;
            this.text = text;
            this.strands = strands;
        }
    }

    private static final List<Question> QUESTIONS = List.of(
    	    new Question("q1", "You are motivated and willingly do computer servicing", List.of("TVL")),
    	    new Question("q2", "You are reliable in social relationship", List.of("HUMSS")),
    	    new Question("q3", "You prefer general education lessons", List.of("GAS")),
    	    new Question("q4", "Management is your skill", List.of("ABM")),
    	    new Question("q5", "You have dedication in business and finance field", List.of("ABM")),
    	    new Question("q6", "You are confident to learn and answer mathematics subjects", List.of("STEM")),
    	    new Question("q7", "You enjoy budgeting money and making financial plans", List.of("ABM")),
    	    new Question("q8", "You are drawn to lessons that focus on technology", List.of("TVL")),
    	    new Question("q9", "You enjoy working on scientific studies of human society", List.of("HUMSS")),
    	    new Question("q10", "You are confident yet not certain for a specific career", List.of("GAS")),
    	    new Question("q11", "You have an interest in creating applications and websites", List.of("TVL")),
    	    new Question("q12", "Graphic designing and digital things is your passion", List.of("TVL")),
    	    new Question("q13", "You enjoy learning new software and hardware-related information", List.of("TVL")),
    	    new Question("q14", "You're passionate in interacting with people", List.of("HUMSS")),
    	    new Question("q15", "You enjoy developing maturity and understanding", List.of("GAS")),
    	    new Question("q16", "You are interested in philosophy and discovering new cultures", List.of("HUMSS")),
    	    new Question("q17", "Instead of focusing on one subject, you like to learn about many topics", List.of("GAS")),
    	    new Question("q18", "You usually learn and exploring new issues in greater detail", List.of("GAS")),
    	    new Question("q19", "Before making a decision, you still want to better understand other options confidently", List.of("GAS")),
    	    new Question("q20", "You calmly and easily do problem-solving", List.of("STEM")),
    	    new Question("q21", "Science and the Earth captures your enthusiasm", List.of("STEM")),
    	    new Question("q22", "You imagined yourself as a scientist, studying natural phenomena on Earth", List.of("STEM")),
    	    new Question("q23", "You enjoy solving complex mathematical problems", List.of("STEM")),
    	    new Question("q24", "You are optimistic in learning science, mathematics and engineering lessons", List.of("STEM")),
    	    new Question("q25", "You are interested in learning physics such as forces and gravity", List.of("STEM")),
    	    new Question("q26", "You're interested in learning how to run your own business", List.of("ABM")),
    	    new Question("q27", "You enjoy performing asset analyses, comprehending all aspects of financial circumstances, interpreting different profitability, and creating audit accounts.", List.of("ABM")),
    	    new Question("q28", "You like to take risks and offer creative, even quirky ideas", List.of("ABM")),
    	    new Question("q29", "You have a passion for creating spaces that develop critical thinking, creativity, communication, and cooperation", List.of("HUMSS")),
    	    new Question("q30", "You love to enjoy reading and composing stories for books", List.of("HUMSS")),
    	    new Question("q31", "You perform better in public speaking and like debating", List.of("HUMSS")),
    	    new Question("q32", "You desire to have the ability to understand and operate a wide range of technology software", List.of("TVL")),
    	    new Question("q33", "You love what you do like gathering, processing and presenting data and build information", List.of("TVL")),
    	    new Question("q34", "You are open to more opportunities", List.of("GAS")),
    	    new Question("q35", "You give yourself the chance to weigh your options first", List.of("GAS"))
    	);

    @GetMapping("/questionnaires")
    public List<Map<String, Object>> getQuestions() {
        List<Map<String, Object>> result = new ArrayList<>();
        for (Question q : QUESTIONS) {
            Map<String, Object> map = new HashMap<>();
            map.put("key", q.key);
            map.put("text", q.text);
            result.add(map);
        }
        return result;
    }

    @PostMapping("/strand/recommend")
    public Map<String, Integer> recommendStrands(@RequestBody Map<String, Integer> answers) {
        Map<String, Integer> scores = new HashMap<>();
        for (Question q : QUESTIONS) {
            int answerScore = answers.getOrDefault(q.key, 2) - 2; // Neutral = 0, Agree = +1, Strongly Agree = +2
            for (String strand : q.strands) {
                scores.put(strand, scores.getOrDefault(strand, 0) + answerScore);
            }
        }
        return scores;
    }
}
