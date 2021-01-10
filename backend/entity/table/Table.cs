using System;

namespace entity.order
{
    public class Table
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public Status Status  { get; set; }

        public Table(string Name, int Size)
        {
            this.Id = Guid.NewGuid();
            this.Name = Name;
            this.Size = Size;
            this.Status = Status.Free;
        }
    }

    public enum Status
    {
        Free = 1,
        Reserved = 2
    }
}