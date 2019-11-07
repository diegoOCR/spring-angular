package com.springboot.backend.apirest.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.springboot.backend.apirest.models.entity.Contacto;

@Service
public class EnvioEmail {
	
    @Autowired
    private JavaMailSender mailSender;
	
    public void sendEmail(Contacto contacto) {

        SimpleMailMessage email = new SimpleMailMessage();

        email.setTo(contacto.getEmail());
        email.setSubject(contacto.getMotivo());
        email.setText(contacto.getMensaje());
        email.setFrom("spring-test@outlook.com");
       
        mailSender.send(email);
    }
    
    

}
