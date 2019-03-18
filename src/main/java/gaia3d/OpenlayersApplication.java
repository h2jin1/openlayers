package gaia3d;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class OpenlayersApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(OpenlayersApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(OpenlayersApplication.class);
	}
	
}
