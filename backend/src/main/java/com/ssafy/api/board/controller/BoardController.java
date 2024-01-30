package com.ssafy.api.board.controller;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Api(value = "게시판 API", tags = {"Board"})
@RestController
@RequestMapping("/api/v1/board")
public class BoardController {

}
