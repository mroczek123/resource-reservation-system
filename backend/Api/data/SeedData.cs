using System;
using System.Linq;
using backend.entity.table;
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
                        User.PasswordCrypt("xyz"),
                        20
                    ),

                    new User
                    (
                        "Papryk",
                        User.PasswordCrypt("mistrz"),
                        20
                    )
                );
                context.SaveChanges();
            }

            if (!context.ProductSet.Any())
            {
                context.ProductSet.AddRange(
                    new Product
                    (
                        "Meat",
                        3.00,
                        "Chicken"
                    ),

                    new Product
                    (
                        "Vegetable",
                        3.50,
                        "Broccoli"
                    )
                );
                context.SaveChanges();
            }

            if (!context.Tables.Any())
            {
                context.Tables.AddRange(
                    new Table
                    (
                        "Stolik 1",
                        5
                    ),

                    new Table
                    (
                        "Stolik 2",
                        3
                    )
                );
                context.SaveChanges();
            }
        }
    }
}