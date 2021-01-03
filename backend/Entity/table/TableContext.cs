using entity.order;
using Microsoft.EntityFrameworkCore;

namespace backend.entity.table
{
    public class TableContext :DbContext
    {
        public TableContext (DbContextOptions<TableContext> options)
            : base(options)
        {
        }

        public DbSet<Table> Tables { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Table>().ToTable("Tables");
        }
    }
}

