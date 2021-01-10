using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.user;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class OrderService
    {
        private DataContext _orders;

        public OrderService(DataContext orders)
        {
            _orders = orders;
        }
        public void Add(Order order)
        {
            _orders.Add(order);
        }
        public void Remove(Guid Id)
        {
            Order SelectedOrder = _orders.OrderSet.ToList()
                .Find(x => x.Id == Id);

            if (SelectedOrder == null)
                throw new SystemException("Order not found.");
            else   
                _orders.Remove(SelectedOrder);
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

        public void ReceiveOrder(Guid Id, Order.status status, User user)
        {
            Order _order = _orders.OrderSet.ToList()
                .Find(x => x.Id == Id);

            _order.Status = status;

            if (status.Equals(Order.status.Done))
            {
                _orders.Remove(_order);
            }
            else
            {
                if (status.Equals(Order.status.InProgress))
                {
                    _order.Worker = user;
                }
            }
        }
    }

  
}