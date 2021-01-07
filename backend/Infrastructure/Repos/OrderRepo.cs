using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.order;
using backend.entity.product;
using backend.entity.user;
using entity.order;


namespace backend
{
    public class OrderRepo
    {
        public Order InsertOrderEntity( OrderContext context, Order product)
        {
            context.OrderSet.Add(product);
            return product;
        }

        public Order GetOrder(OrderContext context, Id id)
        {
            return context.OrderSet.Single(b => b.Id == id);
           
        }
    }    
}
