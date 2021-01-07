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
        // dodac configurations : Array
    }
}