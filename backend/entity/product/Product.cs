using System;
using backend;

namespace entity.order
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Category { get; set; }
        public double BasePrice { get; set; }
        public string Name { get; set; }

        public Product(string Category, double BasePrice, string Name)
        {
            this.Id = Guid.NewGuid();
            this.Category = Category;
            this.BasePrice = BasePrice;
            this.Name = Name;
        }
    }
}