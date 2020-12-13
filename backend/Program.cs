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
            
            
            
            DbService Database = new DbService();
            SQLiteConnection databaseConnection;
            databaseConnection = Database.CreateConnection(); // Create Connection to Database

            Database.CreateTable(databaseConnection);
            Database.InsertData(databaseConnection);
            Database.ReadData(databaseConnection);
        }
    }
}
