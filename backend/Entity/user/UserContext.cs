
using entity.order;
using Microsoft.EntityFrameworkCore;

namespace backend.entity.user
{
    public class UserContext :DbContext
    {
        public UserContext (DbContextOptions<UserContext> options)
            :base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<LogIn> Logged { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .ToTable("User")
                .HasKey(x => x.Id);

            modelBuilder.Entity<LogIn>()
                .ToTable("LogIn")
                .HasKey(x => x.User_Id);
                  
        }
    }
}

