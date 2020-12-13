using Microsoft.EntityFrameworkCore;
using entity.order;


namespace Api.model
{ 
    public class UserContext : DbContext
        {
            public UserContext(DbContextOptions<UserContext> options)
                : base(options)
            {
            }

            public DbSet<User> Users { get; set; }
            public DbSet<Logged> Logging { get; set; }
        }
}