using System;
using System.Collections.Generic;
using System.Text;

namespace backend.entity.product
{
    public class Option
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Size { get; set; }
    }
}
