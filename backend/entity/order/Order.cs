using System;
using backend;
using backend.entity.user;

namespace entity.order
{
    public class Order
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public User Client { get; set; }
        public double Tip { get; set; }
        public double Price { get; set; }
        public Product Product { get; set; }
        public User Worker { get; set; }
        public Table Table { get; set; }
        public status Status { get; set; }
        public enum status 
        { 
            Received,
            InProgress,
            Done
        }
        
    }
}