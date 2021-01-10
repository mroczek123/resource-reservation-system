using System;

namespace entity.order
{
    public class Table
    {
        public Table(string name, int size, Status status)
        {
            Id = Guid.NewGuid();
            Name = name;
            Size = size;
            Status = status;
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public Status Status  { get; set; }
    }

    public enum Status
    {
        Free = 1,
        Reserved = 2
    }
}