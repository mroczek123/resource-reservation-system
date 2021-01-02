using System;
using System.Linq;

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

                context.Logged.AddRange(
                    new Logged
                    {
                        LoggedID = 1,
                        Name = "Darek",
                        Rights = (Logged.Right)3,
                        Password = Logged.PasswordCrypt("xyz")
                    }
                );
                context.SaveChanges();
            }
        }
    }
}