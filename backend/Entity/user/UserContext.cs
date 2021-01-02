using Microsoft.EntityFrameworkCore;

namespace entity.order
{
    public class UserContext :DbContext
    {
        public UserContext (DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Logged> Logged { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Logged>().ToTable("Logged");
        }
    }
}