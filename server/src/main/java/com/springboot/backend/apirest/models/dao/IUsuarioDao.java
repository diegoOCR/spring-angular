package com.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Long> {

	public Usuario findByUsername(String username);

	@Query("select u from Usuario u where u.username=?1")
	public Usuario findByUsername2(String username);

	

//	@Query(value = "insert into usuarios_roles (usuario_id, role_id) VALUES (?1, ?2)", nativeQuery = true)
//	public Usuario insertarRol(Long userId, int roles);
	
//	@Modifying
//  @Transactional
//	@Query(value = "insert into usuarios (username, password, enabled, nombre, apellido, email) VALUES (?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
//	public Usuario insertarRol(String userId, String userId1,boolean userId2,String userId3,String userId4,String userId5);
	
	
	
}
