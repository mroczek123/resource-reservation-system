using System;
using System.Collections.Generic;
using System.Data.SQLite;
using backend.entity.product;
using entity.order;

namespace backend.service
{
    public class ProductService
    {
        private ProductContext context;

        public IEnumerable<Product> GetAllProducts()
        {
            throw new NotImplementedException();
        }
    }
}