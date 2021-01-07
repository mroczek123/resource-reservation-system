using System;
using System.Collections.Generic;
using System.Data.SQLite;
using entity.order;

namespace backend.service
{
    public class TableService
    {
        private SQLiteConnection connection { get; set; }

        public IEnumerable<Table> GetAllTablesGetTable()
        {
            throw new NotImplementedException();
        }
    }
}