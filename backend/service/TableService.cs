using System.Collections.Generic;
using System.Data.SQLite;
using entity.order;

namespace backend.service
{
    public class TableService
    {
        private SQLiteConnection connection{ get; set; }
        private TableRepo database{ get; set; }
        
        public Table CreateTable(Table table)
        {
            return database.InsertTableEntity(connection, table);
        }

        public int DeleteTable(Id id)
        {
            return  database.DeleteTableEntity(connection, id);
        }
        public Table UpdateTable(Table table)
        {
            return  database.UpdateWholeTableEntity(connection, table);
        }
        public Table ChangeTableStatus(Id id, Status status)
        {
            return  database.UpdateTableEntityStatus(connection, id, status);
        }
        
        public Table GetTable(Id id)
        {
            return database.GetTableEntity(connection, id);
        }
        public List<Table> GetAllTablesGetTable()
        {
            return database.GetAllData(connection);
        }
        public List<Table> FindTableByStatus(Status status)
        {
           return database.FindByStatus(connection, status);
        }
    }
}