﻿using System;
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
        private readonly OrderService _orderService;
        private readonly TableService _userServiceTable;
        public UsersController(ILogger<UsersController> logger, UserService userService, OrderService orderService)
        {
            _logger = logger;
            _userService = userService;
            _orderService = orderService;
        }
        //Table Reservation
        [HttpPut("Reservation/{tableId}")]
        public IActionResult Reserve(Guid tableId)
        {
            _userServiceTable.Reservation(tableId);
            return NoContent();
        }
        //Paying 
        [HttpPut("AddCredits")]
        public IActionResult AddCredits(double credit)
        {
            _userService.AddCredits(credit);
            return NoContent();
        }

        [HttpPut("Paying")]
        public bool Pay(User user, bool tip, double amount)
        {
            bool PayingResult = _userService.Pay(user);
            
            if (PayingResult == false)
            {
                throw new Exception("You dont have money. Add Credits to your account.");
            }
            
            if (tip == true && PayingResult == true)
            {
                _userService.GiveTip(user, amount);
            }
   
            return PayingResult;
        }
        
        [HttpGet]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{userId}", Name = "GetOne")]
        public User GetOne([FromRoute]Guid userId)
        {
            return _userService.Get(userId);
        }
        
       
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost( "/createOrder")]
        public Order CreateOrder([FromBody]BaseOrder baseOrder)
        {
            return _orderService.CreateBasicOrder(baseOrder.Client,baseOrder.Products,baseOrder.Table);
        }
        
        [HttpPut("{userId}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public User UpdateOne([FromRoute]Guid userId, [FromBody]User user)
        {
            _userService.Update(userId, user);
            return user;
        }

        [HttpDelete("{userId}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult DeleteOne([FromRoute]Guid userId)
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<User>> LogOutUser(User user) // Add Logged ENTITY
        {
            return NoContent();
        }
    }
}
