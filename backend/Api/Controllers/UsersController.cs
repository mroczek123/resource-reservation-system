using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using backend.entity.user;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using entity.order;
using backend.entity.user;
using backend.managers;
using backend.service;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly UserService _userService;
        public UsersController(ILogger<UsersController> logger, UserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
        }

        [HttpGet("{userId}", Name = "GetOne")]
        public User GetOne([FromRoute]Guid userId)
        {
            return _userService.Get(userId);
        }
        
        [HttpPut("{userId}")]
        public User UpdateOne([FromRoute]Guid userId, [FromBody]User user)
        {
            _userService.Update(userId, user);
            return user;
        }

        [HttpDelete("{userId}")]
        public IActionResult DeleteOne([FromRoute]string userId)
        {
            _userService.Remove(userId);
            return NoContent();
        }

        // POST: api/Users/5
        [HttpPost("/register")]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            _userService.Add(user);
            return CreatedAtAction("GetOne", new { id = user.Id}, user);
        }
       

        // Delete: api/Users/5
        [HttpDelete("/logout")]
        public async Task<ActionResult<User>> LogOutUser(User user) // Add Logged ENTITY
        {
           

            return NoContent();
        }
    }
}
