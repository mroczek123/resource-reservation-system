using System;
using System.Data.SQLite;

namespace backend.Infrastructure.SQLite
{
    public class DBConnector
    {
        // Creating Connection to Database
        public SQLiteConnection CreateConnection()
        {
            SQLiteConnection dbConnection;

            dbConnection = new SQLiteConnection("Data Source=database.db; Version=3; New=true; Compress=True;");
            // Opening the connection

            try
            {
                dbConnection.Open();
            }
            catch (Exception ex)
            {
             
            }
            return dbConnection;
        }
    }
}