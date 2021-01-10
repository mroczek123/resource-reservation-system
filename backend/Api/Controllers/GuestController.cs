using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GuestController : Controller
    {
        private TableService _guestService;

        public GuestController(TableService guestService)
        {
            _guestService = guestService;
        }
        
        [HttpGet("Show/Tables")]
        public IEnumerable<Table> GetAll()
        {
            return _guestService.GetAllTables();
        }
    }
}
