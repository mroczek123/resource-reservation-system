using backend.entity.product;
using entity.order;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.entity.order
{
    public class OrderContext :DataContext
    {
        public OrderContext (IConfiguration options)
            : base(options)
        {
        }

        public DbSet<Order> OrderSet { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().ToTable("Order");
        }
    }
}

