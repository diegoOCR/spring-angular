package com.springboot.backend.apirest.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEpAIBAAKCAQEAyUwmLevgthmlgY8eejINpfVU/vZw0hlTjIdCelwmONnagV0T\r\n" + 
			"Sqc28EN9/ncSAZOaw6cDYIBLTz9eNRu3LeklpZWn5Ol8HCLWv49tngyZ5L4M/oca\r\n" + 
			"O8HRvQupmDk19m6zYxj7sUGStbAbR+ISqLOOAgQg6KCPtHsz44kfmEsK75KVwAus\r\n" + 
			"eIKd34Pe8mErrolzp9T+6LNyBJ89tzpq/q0MqykA2t4K9vHNF2Xm7OXhpKT4NVvl\r\n" + 
			"iifbOA7OCz4vOIx2dPtH8OZAcsA3z6Ybi5fD3N7Y6q/h65yaZRDkekgoQANVCwfA\r\n" + 
			"7t4mB5KJKzJedZyIZXiY4hdkpavwqk0g0GZ77wIDAQABAoIBACx/N8VY6fB3FN3h\r\n" + 
			"3DPY0qmH5MUDhwb6cDyVPb28lvpkNef4wiXzdrJ/yN8yRPmyPjjXt2hik8Mt185X\r\n" + 
			"lROCAT9sKJPyhOvXS69Grk2MrYwh8s9k4AirnIh0hoXOx7301JSoViLlwt+E0VL/\r\n" + 
			"h25hWpfZf8jMjVexEFRQ4HoSxJUWZnt7ip+iM6VInEA65FVnf9eowQhxnpfZ8UBJ\r\n" + 
			"NcY/eZWKkOTBXV9PblXyobn3/Cno/HYLFrgX+NACQ3ehBVP7FPLIEHTGY2gRjiPb\r\n" + 
			"NSUa521495q1QDNha2XOUBuL6YwG+8hR/Xhq+L/w0b4bq1gG/moUpSB5Jpivbm4Y\r\n" + 
			"5ujTj/ECgYEA9OM6o1Syv9ebeBBRgvY7HQn+yLEO5BY11I0+m5RstS0SHFbQ3v2V\r\n" + 
			"D51YPT1cDA67g6Ua2+E7ZPnzav9rysCdQzr5SGMek7VcDsGwswgL+hrkNjL0NcWc\r\n" + 
			"dOJzkPO+oZKOfmci9oiDC9SBqAR8w22/1sVR1+LAEKWcGi1uMLzwJccCgYEA0m6M\r\n" + 
			"in0WyzhpBQ8jLPJpSEPPYOgzNj1JJEdBoJivtR0AkQO81ksGBF2+tukiI3IpK6J7\r\n" + 
			"F1oHLp9QWy851t7g40kLrYKY02DUxikGRDHDg1mJT16ISWjJOpr87ZD2d1uc0Ep7\r\n" + 
			"fiRmWxbIQdkpZVDxhSn79/zPK/XrD/rb/JMA2JkCgYAEjwZUbAs3zwex4Hvj+Dl5\r\n" + 
			"fOolSkaAsHkoD8kOlGDBrqkbpfIVdJsFw2QVH8NK5itPdA9f8H1uj8icQUz8ZUGI\r\n" + 
			"MtzZIB89mK6yB6EGdCvk6AM/jwtExPz4oA6OsDroPxYv/DOGa1wlKDuRqSO5b52W\r\n" + 
			"ne28GxiANtUFF7tpZNsDmQKBgQCdGIa3RNdlc4GDk19xSK+skWMaN38z+ODHwqKN\r\n" + 
			"4C8ciMBJgn7RhETDsbCVIMqpp6pwtuYp8r314l29FS6a6Nz/ESM0r5CkDWALZ8kT\r\n" + 
			"1Arf3lIR/MLF+wJvTBGS0WwOg0g4f8Jd05LOYd2yuwqaZqlH/qXq5sNLUFXiIidl\r\n" + 
			"EeHJ0QKBgQCYpVd9tnMUCC3W5c7l/6beagP3q3zKeN5DOnmao8R2675HUIK6k1vf\r\n" + 
			"woI0D1vj0A/ZPHNssyAjvtsNp+Nd2CUMmvVGj/iuP0VX/3YDX4cSpHrum9Jm9FHx\r\n" + 
			"WqUgumnH0kxFBLVbV+sPkTrnCpSJT2Fei5Ijgnu+WHANGxlbxNVd/w==\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUwmLevgthmlgY8eejIN\r\n" + 
			"pfVU/vZw0hlTjIdCelwmONnagV0TSqc28EN9/ncSAZOaw6cDYIBLTz9eNRu3Lekl\r\n" + 
			"pZWn5Ol8HCLWv49tngyZ5L4M/ocaO8HRvQupmDk19m6zYxj7sUGStbAbR+ISqLOO\r\n" + 
			"AgQg6KCPtHsz44kfmEsK75KVwAuseIKd34Pe8mErrolzp9T+6LNyBJ89tzpq/q0M\r\n" + 
			"qykA2t4K9vHNF2Xm7OXhpKT4NVvliifbOA7OCz4vOIx2dPtH8OZAcsA3z6Ybi5fD\r\n" + 
			"3N7Y6q/h65yaZRDkekgoQANVCwfA7t4mB5KJKzJedZyIZXiY4hdkpavwqk0g0GZ7\r\n" + 
			"7wIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";

}
