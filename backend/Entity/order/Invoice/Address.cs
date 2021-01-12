using System;

namespace backend.Entity.utilites
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