using System;
using System.Linq;
using backend.entity.user;
using backend.entity.utilites;
using entity.order;

namespace Api.data
{
    public static class SeedData
    {
        public static void Initialize(DataContext context)
        {
            if (!context.UserSet.Any())
            {
                context.UserSet.AddRange(
                    new User
                    (
                        "Darek",
                        (User.Right)3,
                        User.PasswordCrypt("xyz")
                    )
                );
                context.SaveChanges();
            }
        }
    }
}