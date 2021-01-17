using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.entity.order.Invoice;
using backend.entity.product;
using backend.entity.table;
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
        private WorkerService _workerService;
        private TableService _workerServiceTable;
        private OrderService _workerServiceOrder;
        private ProductService _workerServiceProduct;
        private CategoryService _workerServiceCategory;
        private readonly ILogger<WorkerController> _logger;

        public WorkerController(ProductService workerServiceProduct ,TableService workerServiceTable, OrderService workerServiceOrder,WorkerService workerService, ILogger<WorkerController> logger)
        {
            _workerServiceTable = workerServiceTable;
            _workerServiceOrder = workerServiceOrder;
            _workerService = workerService;
            _workerServiceProduct = workerServiceProduct;
            _logger = logger;
        }
        // TABLES
        [HttpGet("{tableId}")]
        public Table GetTable(Guid tableId)
        {
            return _workerServiceTable.Get(tableId);
        }

        [HttpGet("Table/All")]
        public IEnumerable<Table> GetAllTables()
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
        public IActionResult DeleteTable(Guid Id)
        {
            _workerServiceTable.Remove(Id);
            return NoContent();
        }

        [HttpPut("{tableId}")]
        public Table UpdateTable(Guid tableId, Table table)
        {
            _workerServiceTable.Update(tableId, table);
            return table;
        }

        // ORDER
        [HttpPut("Receiving/{orderId}")]
        public IActionResult ReceiveOrder(Guid orderId, Order.status status, User user)
        {
            _workerServiceOrder.ReceiveOrder(orderId, status, user);
            return NoContent();
        }

        [HttpDelete("{orderId}")]
        public IActionResult DeleteOrder(Guid Id)
        {
            _workerServiceOrder.Remove(Id);
            return NoContent();
        }

        [HttpGet("Order/All")]
        public IEnumerable<Order> GetAllOrders()
        {
            return _workerServiceOrder.GetAll();
        }

        [HttpGet("{orderId}")]
        public Order GetOrder(Guid orderId)
        {
            return _workerServiceOrder.Get(orderId);
        }

        [HttpPost("Invoices/{orderId}")]
        public ActionResult<Invoice> CreateInvoice(Invoice invoice, Guid orderId)
        {
            _workerService.GenerateInvoice(orderId);

            return CreatedAtAction("CreateInvoice", new { id = invoice.Id }, invoice);
        }
        /// Product Management

        [HttpPost("Product/{productId}")]
        public ActionResult<Product> AddProduct(Product product)
        {
            _workerServiceProduct.Add(product);
            return CreatedAtAction("GetOne", new { id = product.Id }, product);
        }

        [HttpDelete("Product/{productId}")]
        public IActionResult DeleteProduct(string productId)
        {
            _workerServiceProduct.Remove(productId);
            return NoContent();
        }

        [HttpGet("Product/{productId}")]
        public Product GetProduct(Guid productId)
        {
            return _workerServiceProduct.Get(productId);
        }

        [HttpGet("Product/All")]
        public IEnumerable<Product> GetAllProducts()
        {
            return _workerServiceProduct.GetAllProducts();
        }

        [HttpPut("Product/{productId}")]
        public Product Edit(Guid productId, Product product)
        {
            _workerServiceProduct.Update(productId, product);
            return product;
        }

        // Category Management

        [HttpGet("{categoryId}")]
        public Category GetOneCategory(Guid categoryId)
        {
            return _workerServiceCategory.GetOne(categoryId);
        }

        [HttpGet("All/")]
        public IEnumerable<Category> GetAllCategories()
        {
            return _workerServiceCategory.GetAll();
        }

        [HttpPut("Edit/{categoryId}")]
        public Category EditCategory(Guid categoryId, Category category)
        {
            _workerServiceCategory.Edit(categoryId, category);
            return category;
        }

        [HttpPost("Create/{categoryId}")]
        public ActionResult<Category> AddCategory(Category category)
        {
            _workerServiceCategory.Add(category);
            return CreatedAtAction("GetOneCategory", new { id = category.Id }, category);
        }
    }
}
