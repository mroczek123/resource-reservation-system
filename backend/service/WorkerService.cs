using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity;
using backend.entity.order.Invoice;
using backend.entity.user;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class WorkerService
    {
        private DataContext _workers;
        private DataContext _orders;

        public WorkerService(DataContext workers)
        { 
            _workers = workers;
        }

        public void GenerateInvoice(Guid orderId)
        {
            var _order = _orders.OrderSet.ToList().Find(o => o.Id == orderId);

            new Invoice(orderId, _order.Price, _order.Client.UserName);
        }
    }
}