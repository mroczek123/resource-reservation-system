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

        public TableService(DataContext tables)
        {
            _tables = tables;
        }
        public void Add(Table table)
        {
            _tables.Add(table);
        }

        public void Remove(string Id)
        {
            Table SelectedTable = _tables.Tables.ToList()
                .Find(x => x.Id.ToString().Contains(Id));

            if (SelectedTable == null)
                throw new SystemException("Table not found.");
            else
                _tables.Remove(SelectedTable);
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
            if (_tables == null)
                throw new SystemException("There is no table to show.");
            else
                return _tables.Tables;
        }
    }
}