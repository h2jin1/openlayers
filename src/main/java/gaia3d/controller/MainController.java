package gaia3d.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/")
public class MainController {
	
	@RequestMapping(value = "main")
	public String main() {
		return "/main";
	}
	
	@RequestMapping(value = "point")
	public String point() {
		return "/point";
	}
	
	@RequestMapping(value = "line")
	public String line() {
		return "/line";
	}
	
	@RequestMapping(value = "polygon")
	public String polygon() {
		return "/polygon";
	}
	
	@RequestMapping(value = "tools")
	public String tools() {
		return "/tools";
	}
	
	@RequestMapping(value ="location")
	public String myPosition() {
		return "/my-location";
	}

}
