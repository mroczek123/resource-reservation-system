using entity.order;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.entity.product
{
    public class ProductContext : DataContext
    {
        public ProductContext (IConfiguration options)
            : base(options)
        {
        }

        public DbSet<Product> ProductSet { get; set; }
        public DbSet<Option> OptionSet { get; set; }
        public DbSet<Category> CategorySet { get; set; }
        public DbSet<ProductConfiguration> ProductConfigurationsSet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("Product");
            modelBuilder.Entity<Option>().ToTable("Option");
            modelBuilder.Entity<Category>().ToTable("Category");
            modelBuilder.Entity<ProductConfiguration>().ToTable("ProductConfiguration");
        }
    }
}

