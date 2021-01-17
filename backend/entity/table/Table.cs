using System;

namespace backend.entity.table
{
    public class Table
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public status Status  { get; set; }

        public Table(string Name, int Size)
        {
            this.Id = Guid.NewGuid();
            this.Name = Name;
            this.Size = Size;
            this.Status = status.Free;
        }

        public enum status
        {
            Free,
            Reserved
        }
    }
}