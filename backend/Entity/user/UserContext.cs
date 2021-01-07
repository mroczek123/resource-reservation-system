
using entity.order;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.entity.user
{
    public class UserContext :DataContext
    {
        public UserContext (IConfiguration  options)
            :base(options) { }
        public DbSet<User> UserSet { get; set; }
        public DbSet<User> RefreashTokens { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .ToTable("User")
                .HasKey(x => x.Id);
            modelBuilder.Entity<RefreshToken>()
                .ToTable("RefreshToken")
                .HasKey(x => x.Id);
        }
    }
}

