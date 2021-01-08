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

        public void Remove(string Id)
        {
            Table SelectedTable = _tables.Tables.ToList()
                .Find(x => x.Id.Contains(Id));
        }

        public void Update(Guid Id, Table table)
        {
            Table TableToEdit = _tables.Tables.ToList().Find(x => x.Id == Id);
            _tables.Remove(TableToEdit);
            _tables.Add(table);
        }

        public Table Get(Guid Id)
        {
            return (Table)_tables.Tables.Select(x => x.Id == Id);
        }

        public IEnumerable<Table> GetAllTables()
        {
            return _tables.Tables;
        }
    }
}