using Microsoft.EntityFrameworkCore;
using entity.order;


namespace DefaultNamespace
{ 
    public class ContosoUserContext : DbContext
        {
            public ContosoUserContext(DbContextOptions<ContosoUserContext> options)
                : base(options)
            {
            }

            public DbSet<User> Users { get; set; }
        }
}