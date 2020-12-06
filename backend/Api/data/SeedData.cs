using System;
using System.Linq;
using DefaultNamespace;
using entity.order;

namespace Api.data
{
    public static class SeedData
    {
        public static void Initialize(ContosoUserContext context)
        {
            if (!context.Users.Any())
            {
                context.Users.AddRange(
                    new User
                    {
                        ID = Int64.MaxValue
                    }
                );

                context.SaveChanges();
            }
        }
    }
}