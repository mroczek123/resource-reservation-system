using backend.entity.order.Invoice;
using backend.entity.product;
using backend.entity.table;
using backend.entity.user;
using entity.order;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.entity.utilites
{

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }
        public DbSet<User> UserSet { get; set; }
        public DbSet<Product> ProductSet { get; set; }
        public DbSet<Option> OptionSet { get; set; }
        public DbSet<Category> CategorySet { get; set; }
        public DbSet<ProductConfiguration> ProductConfigurationsSet { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Order> OrderSet { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Address> CompanyAddress { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().ToTable("Order");
            modelBuilder.Entity<Table>().ToTable("Tables");
            modelBuilder.Entity<Product>().ToTable("Product");
            modelBuilder.Entity<Option>().ToTable("Option");
            modelBuilder.Entity<Category>().ToTable("Category");
            modelBuilder.Entity<Address>().ToTable("Address");
            modelBuilder.Entity<ProductConfiguration>().ToTable("ProductConfiguration");
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Invoice>().ToTable("Invoices");
            

        }
    }
}

    
