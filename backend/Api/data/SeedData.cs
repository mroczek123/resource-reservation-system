using System;
using System.Linq;
using backend;
using backend.entity.user;
using entity.order;

namespace Api.data
{
    public static class SeedData
    {
        public static void Initialize(UserContext context)
        {
            if (!context.Users.Any())
            {
                ////////////////////////////////////////////////////////////////
                /*context.Users.AddRange(
                    new User
                    (
                        "Darek",
                        (User.Right)3,
                        "abcdefdg"
                    )
                );*/
                ////////////////////////////////////////////////////////////////
                context.SaveChanges();
            }
        }
    }
}