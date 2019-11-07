package com.springboot.backend.apirest.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.apirest.models.dao.IContactoDao;
import com.springboot.backend.apirest.models.entity.Contacto;

@Service
public class ContactoServiceImpl implements IContactoService{
	
	
	@Autowired
	private IContactoDao contactoDao;

	@Override
	@Transactional
	public Contacto save(Contacto contacto) {	
		return contactoDao.save(contacto);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Contacto findById(Long id) {
		return contactoDao.getOne(id);
		
	}
	
}
