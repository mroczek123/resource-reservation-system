using System;
using System.Linq;
using Api.model;
using entity.order;

namespace Api.data
{
    public static class SeedData
    {
        public static void Initialize(UserContext context)
        {
            if (!context.Users.Any())
            {
                context.Users.AddRange(
                    new User
                    {
                        ID = 1
                    }
                );

                context.SaveChanges();
            }
        }
    }
}