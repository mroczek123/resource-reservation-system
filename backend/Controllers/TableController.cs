using System.Collections.Generic;
using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        private TableService tableService;

        public TableController(TableService tableService, ILogger<TableController> logger)
        {
            this.tableService = tableService;
            _logger = logger;
        }

        private readonly ILogger<TableController> _logger;

        public TableController(ILogger<TableController> logger)
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
