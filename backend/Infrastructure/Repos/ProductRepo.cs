using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.product;
using entity.order;


namespace backend
{
    public class ProductRepo
    {
        public Product InsertProductEntity( ProductContext context, Product product)
        {
            context.ProductSet.Add(product);
            return product;
        }

        public Product GetProduct(ProductContext context, Id id)
        {
            return context.ProductSet.Single(b => b.Id == id);
           
        }
    }    
}
