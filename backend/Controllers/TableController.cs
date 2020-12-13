using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;
using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Tables]")]
    public class TableController(TableService tableService) : ControllerBase
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
