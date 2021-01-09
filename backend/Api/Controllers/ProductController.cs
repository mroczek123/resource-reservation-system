using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        private ProductService _productService;
        private readonly ILogger<ProductController> _logger;

        public ProductController(ProductService productService, ILogger<ProductController> logger)
        {
            _productService = productService;
            _logger = logger;
        }
        [HttpPut("{productId}")]
        public Product Edit(Guid productId, Product product)
        {
            _productService.Update(productId, product);
            return product;
        }

        [HttpPost("{productId}")]
        public async Task<ActionResult<Product>> AddProduct(Product product)
        {
            _productService.Add(product);
            return CreatedAtAction("GetOne", new { id = product.Id }, product);
        }

        [HttpDelete("{productId}")]
        public IActionResult Delete(string productId)
        {
            _productService.Remove(productId);
            return NoContent();
        }

        [HttpGet("{productId}")]
        public Product GetOne(Guid productId)
        {
            return _productService.Get(productId);
        }

        [HttpGet("/All")]
        public IEnumerable<Product> Get()
        {
            return _productService.GetAllProducts();
        }
    }
}
