using backend.entity.user;
using entity.order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Entity.utilites
{
    public class Invoice
    {
        private Address _address;
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public string CompanyName { get; set; }
        public Address Address { get; set; }
        public string NIP { get; set; }
        public string UserName { get; set; }
        public double Sum { get; set; }
        public Invoice(Guid orderId, double sum, string userName)
        {
            Id = Guid.NewGuid();
            OrderId = orderId;
            CompanyName = "Restaurant";
            _address = Address;
            NIP = "6462933516";
            Sum = sum;
            UserName = userName;
        }
    }
}
