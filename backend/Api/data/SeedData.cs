namespace Api.data
{
    public static class SeedData
    {
        public static void Initialize(ContosoPetsContext context)
        {
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product
                    {
                        Name = "Squeaky Bone",
                        Price = 20.99m,
                    },
                    new Product
                    {
                        Name = "Knotted Rope",
                        Price = 12.99m,
                    }
                );

                context.SaveChanges();
            }
        }
    }
}