using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.entity.user;
using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/Management/[controller]")]
    public class WorkerController : ControllerBase
    {
        private TableService _workerServiceTable;
        private OrderService _workerServiceOrder;
        private readonly ILogger<WorkerController> _logger;

        public WorkerController(TableService workerServiceTable, OrderService workerServiceOrder, ILogger<WorkerController> logger)
        {
            _workerServiceTable = workerServiceTable;
            _workerServiceOrder = workerServiceOrder;
            _logger = logger;
        }
        // TABLES
        [HttpGet]
        public IEnumerable<Table> GetAll()
        {
            return _workerServiceTable.GetAllTables();
        }

        [HttpPost("Create/{tableId}")]
        public async Task<ActionResult<Table>> AddTable(Table table)
        {
            _workerServiceTable.Add(table);
            return CreatedAtAction("GetOne", new { id = table.Id }, table);
        }

        [HttpDelete("{tableId}")]
        public IActionResult DeleteOne(Guid Id)
        {
            _workerServiceTable.Remove(Id);
            return NoContent();
        }

        // ORDER
        [HttpPut("Receiving/{orderId}")]
        public IActionResult Receive(Guid orderId, Order.status status, User user)
        {
            _workerServiceOrder.ReceiveOrder(orderId, status, user);
            return NoContent();
        }

        [HttpDelete("{orderId}")]
        public IActionResult Delete(Guid Id)
        {
            _workerServiceOrder.Remove(Id);
            return NoContent();
        }

        [HttpGet("All")]
        public IEnumerable<Order> Get()
        {
            return _workerServiceOrder.GetAll();
        }

        [HttpGet("{orderId}")]
        public Order GetOne(Guid orderId)
        {
            return _workerServiceOrder.Get(orderId);
        }

    }
}
