using System;
using System.Collections.Generic;
using System.Data.SQLite;
using entity.order;


namespace backend
{
    public class TableRepo
    {
        // TODO: Finish Repo functions
        // Creating example Table
        public void CreateDBTable(SQLiteConnection connection)
        {
            SQLiteCommand dbCommand;

            string CreateSample1 = "CREATE TABLE table" +
                "(Id Long, Name VARCHAR(20), Size Varchar(10), Status Varchar(10)";


            dbCommand = connection.CreateCommand();

            dbCommand.CommandText = CreateSample1;
            dbCommand.ExecuteNonQuery();
        }

        // Inserting Data
        public Table InsertTableEntity(SQLiteConnection connection, Table table)
        {
            SQLiteCommand dbCommand;
            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "INSERT INTO table" +
                                    $"(Id, Name, Size, Status ) VALUES ({table.Id}, {table.Name},{table.Size},{table.Status});";
            dbCommand.ExecuteNonQuery();
            
            throw new NotImplementedException();
            
        }
        
        // Inserting Data
        public Table UpdateWholeTableEntity(SQLiteConnection connection, Table table)
        {
            SQLiteCommand dbCommand;
            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "UPDATE table Set" +
                                    $"Name = {table.Name} Size  = {table.Size} Status =  {table.Status}  " +
                                    $" WHERE Id == {table.Id};";
            dbCommand.ExecuteNonQuery();
            
            throw new NotImplementedException();
            
        }
        // Inserting Data
        public Table UpdateTableEntityStatus(SQLiteConnection connection, Id id , Status status)
        {
            SQLiteCommand dbCommand;
            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "UPDATE table Set" +
                                    $"  Status =  {status}" +
                                    $" WHERE Id == {id};";
            dbCommand.ExecuteNonQuery();
            throw new NotImplementedException();
            
        }
        // Reading Data
        public List<Table> GetAllData(SQLiteConnection connection)
        {
            SQLiteDataReader dbDataReader;
            SQLiteCommand dbCommand;

            dbCommand = connection.CreateCommand();
            dbCommand.CommandText = "SELECT * FROM table";

            dbCommand.ExecuteReader().GetString(Int32.MaxValue);
            
            throw new NotImplementedException();

        }


        public List<Table> FindByStatus(SQLiteConnection connection, Status status)
        {
            throw new NotImplementedException();
        }

        public Table GetTableEntity(SQLiteConnection connection, Id id)
        {
            throw new NotImplementedException();
        }

        public int DeleteTableEntity(SQLiteConnection connection, Id id)
        {
            throw new NotImplementedException();
        }
    }
}
