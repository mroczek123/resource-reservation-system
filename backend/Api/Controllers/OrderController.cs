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

        [HttpPut("Status/{orderId}")]
        public Order EditStatus(Guid orderId, Order.status status, Order order)
        {
            _orderService.OrderStatus(orderId, status);
            return order;
        }

        [HttpPut("{orderId}")]
        public Order Edit(Guid orderId, Order order)
        {
            _orderService.Update(orderId, order);
            return order;
        }

        [HttpDelete("{orderId}")]
        public IActionResult Delete(string Id)
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
        
    }
}
