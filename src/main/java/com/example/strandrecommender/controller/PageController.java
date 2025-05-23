package com.example.strandrecommender.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping("/")
    public String homePage() {
        return "home";
    }

    @GetMapping("/questionnaire")
    public String questionnairePage() {
        return "questionnaire";
    }
    
    @GetMapping("/about")
    public String abt() {
        return "about";
    }
    
    @GetMapping("/stem")
    public String stem() {
        return "stem";
    }
    
    @GetMapping("/abm")
    public String abm() {
        return "abm";
    }
    
    @GetMapping("/humss")
    public String humss() {
        return "humss";
    }
    
    @GetMapping("/gas")
    public String gas() {
        return "gas";
    }
    
    @GetMapping("/ict")
    public String ict() {
        return "ict";
    }
    
    
    @GetMapping("/he")
    public String he() {
        return "he";
    }
    @GetMapping("/arts")
    public String arts() {
        return "arts";
    }
    
    @GetMapping("/tracks")
    public String tracks() {
        return "tracks";
    }
    
    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
    
    @GetMapping("/result")
    public String result() {
        return "results";
    }
    
    @GetMapping("/privacy-policy")
    public String privacypolicy() {
        return "privacy-policy";
    }
    
    @GetMapping("/terms-of-service")
    public String termofservice() {
        return "term-of-service";
    }
     
    @GetMapping("/disclaimer")
    public String disclaimer() {
        return "disclaimer";
    }
    
}
