using System;
using System.Data.SQLite;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Api.data;
using DefaultNamespace;
using Microsoft.Extensions.DependencyInjection;


namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            dbService Database = new dbService();
            var host = CreateHostBuilder(args).Build();
            SeedDatabase(host);
            host.Run();

            SQLiteConnection databaseConnection;
            databaseConnection = Database.CreateConnection(); // Create Connection to Database

            Database.CreateTable(databaseConnection);
            Database.InsertData(databaseConnection);
            Database.ReadData(databaseConnection);
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });

        private static void SeedDatabase(IHost host)
        {
            var scopeFactory = host.Services.GetRequiredService<IServiceScopeFactory>();
            using var scope = scopeFactory.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<ContosoUserContext>();

            if (context.Database.EnsureCreated())
            {
                try
                {
                    SeedData.Initialize(context);
                }
                catch (Exception ex)
                {
                    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "A database seeding error occurred.");
                }
            }
        }
    }
}
