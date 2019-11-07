package com.springboot.backend.apirest.models.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.backend.apirest.models.dao.IUsuariosRolesDao;
import com.springboot.backend.apirest.models.entity.UsuariosRoles;

@Service
public class UsuarioRolesServiceImpl implements IUsuarioRolesService{
	
	@Autowired
	private IUsuariosRolesDao usuarioRoles;

	@Override
	public UsuariosRoles save(UsuariosRoles id) {
		return usuarioRoles.save(id);
	}

}
