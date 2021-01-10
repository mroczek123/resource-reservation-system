using System.Collections.Generic;
using System.Data.SQLite;
using backend.entity;
using backend.entity.user;
using backend.entity.utilites;
using entity.order;

namespace backend.service
{
    public class WorkerService
    {
        private DataContext _workers;

        public WorkerService(DataContext workers) => _workers = workers;
        

    }
}