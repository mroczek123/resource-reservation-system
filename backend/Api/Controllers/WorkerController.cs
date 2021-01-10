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
    public class WorkerController : ControllerBase
    {
        private OrderService _orderService;
        private readonly ILogger<WorkerController> _logger;

        public WorkerController(OrderService _orderService, ILogger<WorkerController> logger)
        {
            this._orderService = _orderService;
            _logger = logger;
        }

        

    }
}
