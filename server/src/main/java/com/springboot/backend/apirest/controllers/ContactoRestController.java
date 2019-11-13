package com.springboot.backend.apirest.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
//import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.apirest.models.entity.Contacto;
import com.springboot.backend.apirest.models.services.EnvioEmail;
import com.springboot.backend.apirest.models.services.IContactoService;



@CrossOrigin(origins = {"http://localhost:4200", "*"})
@RestController
@RequestMapping("/api")
public class ContactoRestController {
	
	@Autowired
	private IContactoService contactoService;
	
	
	@Autowired
	private EnvioEmail envioEmail;
	
	//@Secured({"ROLE_ADMIN", "ROLE_USER"})
	@PostMapping("/contacto")
	public ResponseEntity<?> create(@Valid @RequestBody Contacto contacto, BindingResult result) {
		
		Contacto contactoNew = null;
		Map<String, Object> response = new HashMap<>();
		
		if(result.hasErrors()) {

			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '" + err.getField() +"' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
			
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		 
		try {
			contactoNew = contactoService.save(contacto);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El mensaje ha sido creado con éxito!");
		response.put("contacto", contactoNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	
//	@Secured({"ROLE_ADMIN", "ROLE_USER"})
	@PostMapping("/email")
	public ResponseEntity<Contacto> enviarEmail(@Valid @RequestBody Contacto contacto) {
		try {
			envioEmail.sendEmail(contacto);
			return new ResponseEntity<>(contacto, HttpStatus.OK);
		} catch (MailException e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	 
	

}
