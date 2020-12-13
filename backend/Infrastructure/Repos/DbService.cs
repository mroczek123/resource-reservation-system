using System;
using System.Data.SQLite;


namespace backend
{
    public class DbService
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

        // Creating example Table
        public void CreateTable(SQLiteConnection connection)
        {
            SQLiteCommand dbCommand;

            string CreateSample1 = "CREATE TABLE SampleTable1" +
                "(Col1 VARCHAR(20), Col2 INT)";
            string CreateSample2 = "CREATE TABLE SampleTable2" +
                "(Col1 VARCHAR(20), Col2 INT)";

            dbCommand = connection.CreateCommand();

            dbCommand.CommandText = CreateSample1;
            dbCommand.ExecuteNonQuery();

            dbCommand.CommandText = CreateSample2;
            dbCommand.ExecuteNonQuery();
        }

        // Inserting Data
        public void InsertData(SQLiteConnection connection)
        {
            SQLiteCommand dbCommand;
            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "INSERT INTO SampleTable1" +
                "(Col1, Col2) VALUES ('TEST TEST', 1);";
            dbCommand.ExecuteNonQuery();

            dbCommand.CommandText = "INSERT INTO SampleTable2" +
                "(Col1, Col2) VALUES ('TEST2 TEST@', 2);";
            dbCommand.ExecuteNonQuery();
        }
        // Reading Data
        public void ReadData(SQLiteConnection connection)
        {
            SQLiteDataReader dbDataReader;
            SQLiteCommand dbCommand;

            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "SELECT * FROM SampleTable1";

            dbDataReader = dbCommand.ExecuteReader();

            while (dbDataReader.Read())
            {
                string Data = dbDataReader.GetString(0);
                Console.WriteLine(Data);
            }

            connection.Close();
        }
    }
}
