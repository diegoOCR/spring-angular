package com.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.springboot.backend.apirest.models.entity.Mensaje;

public interface ChatRepository extends MongoRepository<Mensaje, String>{
	
	public List<Mensaje> findFirst10ByOrderByFechaDesc();

}
