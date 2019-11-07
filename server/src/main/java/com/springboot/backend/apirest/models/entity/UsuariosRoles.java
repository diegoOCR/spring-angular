package com.springboot.backend.apirest.models.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuarios_roles")
public class UsuariosRoles implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer usuario_rol_id;

	private Integer usuario_id;

	private Integer role_id;

	public Integer getUsuario_rol_id() {
		return usuario_rol_id;
	}

	public void setUsuario_rol_id(Integer usuario_rol_id) {
		this.usuario_rol_id = usuario_rol_id;
	}

	public Integer getusuario_id() {
		return usuario_id;
	}

	public void setusuario_id(Integer usuario_id) {
		this.usuario_id = usuario_id;
	}

	public Integer getrole_id() {
		return role_id;
	}

	public void setrole_id(Integer role_id) {
		this.role_id = role_id;
	}

	private static final long serialVersionUID = 9078518724442608255L;

}
