package com.wit.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("http://192.168.24.1:3000").allowedMethods("*").allowedHeaders("*").allowCredentials(true);
		// 리액트 앱 말곤 다른곳에선 데이터 못 가져가게 방지
		// 서버 와 URL 이 다른 곳에서 Credential(세션) 값을 전송해도 허용하는 설정
	}

}
