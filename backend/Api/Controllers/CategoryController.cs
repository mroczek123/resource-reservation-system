using backend.entity.product;
using backend.service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly CategoryService _categoryService;

        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        
        [HttpGet("{categoryId}")]
        public Category GetOne(Guid categoryId)
        {
            return _categoryService.GetOne(categoryId);
        }

        [HttpGet("All/")]
        public IEnumerable<Category> GetAll()
        {
            return _categoryService.GetAll();
        }

        [HttpPut("Edit/{categoryId}")]
        public Category Edit(Guid categoryId, Category category)
        {
            _categoryService.Edit(categoryId, category);
            return category;
        }

        [HttpPost("Create/{categoryId}")]
        public ActionResult<Category> AddCategory(Category category)
        {
            _categoryService.Add(category);
            return CreatedAtAction("GetOne", new { id = category.Id }, category);
        }
    }
}
