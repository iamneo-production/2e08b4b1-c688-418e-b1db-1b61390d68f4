package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

 
    private final JwtAuthenticationFilter jwtAuthFilter;
 
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
        .cors().configurationSource(corsConfigurationSource())
		.and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/v1/auth/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider) // 1. Here we need to tell spring which authentication
                                                                // provider we are going to use
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // 2. Adding a
                                                                                             // jwtAuthFilter
                                                                                             // before
                                                                                             // UsernamePasswordAuthenticationFilter
        return httpSecurity.build();
    }
    @Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.addAllowedOrigin("*"); // Allow all origins
		configuration.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, etc.)
		configuration.addAllowedHeader("*"); // Allow all headers (Authorization, Content-Type, etc.)
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		
		return source;
	}
	
	@Bean
	public CorsFilter corsFilter() {
		return new CorsFilter(corsConfigurationSource());
	}
}
