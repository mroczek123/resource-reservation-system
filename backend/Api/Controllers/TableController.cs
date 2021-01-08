using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        private TableService _tableService;

        public TableController(TableService _tableService, ILogger<TableController> logger)
        {
            this._tableService = _tableService;
            _logger = logger;
        }

        private readonly ILogger<TableController> _logger;

        public TableController(ILogger<TableController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{tableId}")]
        public Table GetOne(Guid tableId)
        {
            return _tableService.Get(tableId);
        }

        [HttpGet]
        public IEnumerable<Table> GetAll(Guid tableId)
        {
            return _tableService.GetAllTables();
        }

        [HttpPut("{tableId}")]
        public Table UpdateOne(Guid tableId, Table table)
        {
            _tableService.Update(tableId, table);
            return table;
        }

        [HttpDelete("{tableId}")]
        public IActionResult DeleteOne(string Id)
        {
            _tableService.Remove(Id);
            return NoContent();
        }

        [HttpPost("/create")]
        public async Task<ActionResult<Table>> AddTable(Table table)
        {
            _tableService.Add(table);
            return CreatedAtAction("GetOne", new { id = table.Id }, table);
        }
    }
}
