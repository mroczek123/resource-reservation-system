using backend.entity.product;
using entity.order;
using Microsoft.EntityFrameworkCore;

namespace backend.entity.order
{
    public class OrderContext :DbContext
    {
        public OrderContext (DbContextOptions<ProductContext> options)
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

