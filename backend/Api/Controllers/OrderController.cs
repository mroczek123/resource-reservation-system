using backend.entity.user;
using backend.service;
using entity.order;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private OrderService _orderService;
        private readonly ILogger<OrderController> _logger;
        public OrderController(ILogger<OrderController> logger, OrderService orderService)
        {
            _orderService = orderService;
            _logger = logger;
        }

        [HttpPut("Receiving/{orderId}")]
        public IActionResult Receive(Guid orderId, Order.status status, User user, Table table)
        {
            _orderService.ReceiveOrder(orderId, status, user, table);
            return NoContent();
        }

        [HttpPut("{orderId}")]
        public Order Edit(Guid orderId, Order order)
        {
            _orderService.Update(orderId, order);
            return order;
        }

        [HttpDelete("{orderId}")]
        public IActionResult Delete(Guid Id)
        {
            _orderService.Remove(Id);
            return NoContent();
        }

        [HttpGet("All")]
        public IEnumerable<Order> Get()
        {
            return _orderService.GetAll();
        }

        [HttpGet("{orderId}")]
        public Order GetOne(Guid orderId)
        {
            return _orderService.Get(orderId);
        }

        [HttpPost("create/{orderId}")]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            _orderService.Add(order);
            return CreatedAtAction("GetOne", new { id = order.Id }, order);
        }


    }
}
