using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.table;
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

        public void Remove(Guid Id)
        {
            Table SelectedTable = _tables.Tables.ToList()
                .Find(x => x.Id == Id);

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

        public void Reservation(Guid tableId)
        {
            Table _table = _tables.Tables
                .ToList()
                .Find(t => t.Id == tableId);
            
            var _status = _table.Status;

            if (_status.Equals(Table.State.Free))
            {
                _status = Table.State.Reserved;
            }
            else
                throw new Exception("Table was already reserved.");
        }
    }
}