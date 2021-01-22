using System;

namespace backend.entity.order.Invoice
{
    public class Address
    {
        public Guid Id { get; set; }
        public string Street { get; set; }
        public int StreetNr { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }

        public Address()
        {
            this.Id = Guid.NewGuid();
            this.Street = "Walukiewicza";
            this.StreetNr = 12;
            this.City = "Gdańsk";
            this.ZipCode = "80-123";
        }
    }
}