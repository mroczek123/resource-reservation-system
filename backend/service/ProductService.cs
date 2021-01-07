using System.Collections.Generic;
using System.Data.SQLite;
using backend.entity.product;
using entity.order;

namespace backend.service
{
    public class ProductService
    {
        private ProductContext context;
        private ProductRepo database;
        
        public Product CreateProduct(Product table)
        {
            return database.InsertProductEntity(context, table);
        }
        public Product ReturnProduct(Id id)
        {
            return database.GetProduct(context, id);
        }

        public IEnumerable<Product> GetAllProducts()
        {
            throw new System.NotImplementedException();
        }
    }

    
}