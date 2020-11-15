using Microsoft.EntityFrameworkCore;
using ContosoPets.Api.Models;


namespace DefaultNamespace
{ 
    public class ContosoUserContext : DbContext
        {
            public ContosoUserContext(DbContextOptions<ContosoUserContext> options)
                : base(options)
            {
            }

            public DbSet<User> User { get; set; }
        }
    }
    }
}