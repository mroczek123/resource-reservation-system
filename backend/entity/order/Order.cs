using System;
using System.Collections.Generic;
using System.Linq;
using backend;
using backend.entity.table;
using backend.entity.user;
using Microsoft.CodeAnalysis.CSharp;

namespace entity.order
{
    public class Order
    {
        
        public Order(User client, List<Product> products, Table table)
        {
            Id = Guid.NewGuid();
            Client = client;
            Products = products;
            Table = table;
            Name = client.UserName;
            Tip = 0.0;
            Price = products.Sum(product => product.BasePrice );
            Name = client.UserName;
            Worker = new User("","",2138);
            Status = status.InProgress;
        }


        public Order()
        {
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public User Client { get; set; }
        public double Tip { get; set; }
        public double Price { get; set; }
        public List<Product> Products { get; set; }
        public User Worker { get; set; }
        public Table Table { get; set; }
        public status Status { get; set; }
        public bool Paid { get; set; }
        
        
        
        

        public enum status 
        { 
            Received,
            InProgress,
            Done
        }
        
    }
}