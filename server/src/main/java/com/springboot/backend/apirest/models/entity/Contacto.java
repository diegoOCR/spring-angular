package com.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "contacto")
public class Contacto implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty(message = "no puede estar vacío")
	@Size(min = 4, max = 12, message = "el tamaño tiene que estar entre 4 y 12")
	@Column(nullable = false)
	private String nombre;

	@NotEmpty(message = "no puede estar vacío")
	private String apellido;

	@NotEmpty(message = "no puede estar vacío")
	@Email(message = "no es una dirección de correo bien formada")
	@Column(nullable = false)
	private String email;

	@NotNull(message = "no puede estar vacío")
	@Column(name = "create_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;

	@NotNull(message = "el motivo no puede ser vacío")
	private String motivo;

	@NotNull(message = "el mensaje no puede ser vacío")
	private String mensaje;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	private static final long serialVersionUID = -7857788954971354088L;

}
