using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class TableService
    {
        private DataContext _tables;

        public void Add(Table table)
        {
            _tables.Add(table);
        }

        public void Remove(Table table)
        {
            _tables.Remove(table);
        }

        public void Update(int Id, Table table)
        {
            Table TableToEdit = _tables.Tables.ToList().Find(x => x.Id == Id);
            _tables.Remove(TableToEdit);
            _tables.Add(table);
        }
        public IEnumerable<Table> GetAllTablesGetTable()
        {
            return _tables.Tables;
        }
    }
}