using System;
using System.Linq;
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
                context.Users.AddRange(
                    new User
                    {
                        Id = Guid.NewGuid()
                    }
                ); ;

                context.Logged.AddRange(
                    new Logged
                    {
                        LoggedId = Guid.NewGuid()
                        Name = "Darek",
                        Rights = (Logged.Right)3,
                        Password = Logged.PasswordCrypt("xyz")
                    }
                ); ;
                context.SaveChanges();
            }
        }
    }
}