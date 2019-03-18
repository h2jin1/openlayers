package gaia3d.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.Data;

@Data
@Configuration
@PropertySource("classpath:openlayers.properties")
@ConfigurationProperties(prefix = "openlayers")
public class PropertiesConfig {
	private String osType;
	private String serverIp;
	private String restAuthKey;
	
	private String logBaseDir;
	private String uploadDir;
	
	private String gdalCmdPath;
}
