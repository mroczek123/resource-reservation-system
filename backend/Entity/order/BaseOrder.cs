using System;
using System.Collections.Generic;
using System.Linq;
using backend;
using backend.entity.user;
using Microsoft.CodeAnalysis.CSharp;

namespace entity.order
{
    public class BaseOrder
    {
        public BaseOrder(Table table, User client, List<Product> products)
        {
            Table = table;
            Client = client;
            Products = products;
        }
        
     
        public User Client { get; set; }
        public Table Table { get; set; }
      
        public List<Product> Products { get; set; }
       
       
        
    }
}