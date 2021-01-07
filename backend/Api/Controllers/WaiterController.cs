using System.Collections.Generic;
using backend.Controllers;
using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WaiterController : ControllerBase
    {
        private TableService tableService;

        public WaiterController(TableService tableService, ILogger<TableController> logger)
        {
            this.tableService = tableService;
            _logger = logger;
        }

        private readonly ILogger<TableController> _logger;

        public WaiterController(ILogger<TableController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Table> Get()
        {
            return tableService.GetAllTablesGetTable();
        }
    }
}
