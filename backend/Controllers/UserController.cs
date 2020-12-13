﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.model;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserContext userContext;

        public UserController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet("User")]
        public object ShowUsers()
        {
            return userContext.Set<User>().ToList();
        }

        [HttpGet("Logged")]
        public object Logged()
        {
            return userContext.Set<Logged>().ToList();
        }

    }
}