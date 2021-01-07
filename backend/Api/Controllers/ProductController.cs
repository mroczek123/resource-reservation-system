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
    public class ProductController : ControllerBase
    {
        private ProductService productService;

        public ProductController(ProductService productService, ILogger<ProductController> logger)
        {
            this.productService = productService;
            _logger = logger;
        }

        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return productService.GetAllProducts();
        }
    }
}
