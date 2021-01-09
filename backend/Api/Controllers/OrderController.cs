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

        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return _orderService.GetAll();
        }

        [HttpGet("{orderId}")]
        public Order GetOne(Guid orderId)
        {
            return _orderService.Get(orderId);
        }

        [HttpPost("/CreateOrder")]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            _orderService.Add(order);
            return CreatedAtAction("GetOne", new { id = order.Id }, order);
        }


    }
}
