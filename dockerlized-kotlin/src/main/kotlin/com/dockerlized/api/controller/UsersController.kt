package com.dockerlized.api.controller

import com.dockerlized.api.bean.User
import org.apache.coyote.Response
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.print.attribute.standard.Media


@RestController
@RequestMapping("/users")
class UsersController {
    private var users: MutableList<User> = mutableListOf("a", "b", "c", "d", "e").map { User(numberingUser(), it) }.toMutableList()

    @GetMapping(path = ["{id}"], produces = [MediaType.APPLICATION_JSON_UTF8_VALUE])
    fun id(@PathVariable(value = "id") id: Int): ResponseEntity<User> {
        return ResponseEntity.ok(User(id, "foo"))
    }

    @GetMapping(produces = [MediaType.APPLICATION_JSON_UTF8_VALUE])
    fun list(): ResponseEntity<MutableList<User>> {
        return ResponseEntity.ok(users)
    }

    @PostMapping(produces = [MediaType.APPLICATION_JSON_UTF8_VALUE])
    fun addUser(@RequestBody user: User): ResponseEntity<User> {
        val newUser = User(numberingUser(), user.name)
        users.add(newUser)
        return ResponseEntity.ok(newUser)
    }

    private var counter = 0
    fun numberingUser(): Int {
        return counter++
    }

}