using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class OrderService
    {
        private DataContext _orders;

        public void Add(Order order)
        {
            _orders.Add(order);
        }

        public void Update(Guid Id, Order order)
        {
            Order _order = _orders.OrderSet.ToList()
                .Find(x => x.Id == Id);
            
            _orders.Remove(_order);
            _orders.Add(order);
        }

        public Order Get(Guid Id)
        {
            return _orders.OrderSet.ToList()
                .Find(x => x.Id == Id);
        }

        public IEnumerable<Order> GetAll()
        {
            return _orders.OrderSet;
        }

        public void OrderStatus(Guid Id, Order.status status)
        {
            Order _order = _orders.OrderSet.ToList()
                .Find(x => x.Id == Id);

            _order.Status = status;

            if (status.Equals(Order.status.Done))
            {
                _orders.Remove(_order);
            }
        }
    }

  
}