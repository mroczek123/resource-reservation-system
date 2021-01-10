using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.product;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class ProductService
    {
        private DataContext _products;

        public ProductService(DataContext products)
        {
            _products = products;
        }
      
        public void Add(Product product)
        {
            _products.Add(product);
        }

        public void Remove(string Id)
        {
            Product SelectedProduct = _products.ProductSet.ToList()
                .Find(x => x.Id.ToString().Contains(Id));
            
            if (SelectedProduct == null)
                throw new SystemException("Product not found.");
            else
                _products.Remove(SelectedProduct);
        }

        public void Update(Guid Id, Product product)
        {
            var _product = _products.ProductSet.ToList()
                .Find(x => x.Id == Id);

            _products.Remove(_product);
            _products.Add(product);
        }

        public Product Get(Guid Id)
        {
            return (Product)_products.ProductSet.Select(x => x.Id == Id); // TEST
        }
        public IEnumerable<Product> GetAllProducts()
        {
            return _products.ProductSet;
        }
    }
}