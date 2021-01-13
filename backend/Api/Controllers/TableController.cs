using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.entity.table;
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
        private readonly TableService _tableService;
        private readonly ILogger<TableController> _logger;

        public TableController(ILogger<TableController> logger, TableService tableService)
        {
            _logger = logger;
            _tableService = tableService;
        }

        [HttpGet("{tableId}")]
        public Table GetOne(Guid tableId)
        {
            return _tableService.Get(tableId);
        }

        [HttpGet("All")]
        public IEnumerable<Table> GetAll()
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
        public IActionResult DeleteOne(Guid Id)
        {
            _tableService.Remove(Id);
            return NoContent();
        }

        [HttpPost("create/{tableId}")]
        public async Task<ActionResult<Table>> AddTable(Table table)
        {
            _tableService.Add(table);
            return CreatedAtAction("GetOne", new { id = table.Id }, table);
        }
    }
}
