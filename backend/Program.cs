using System;
//using System.Data.SQLite;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Api.data;
using Api.model;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;


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
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}
