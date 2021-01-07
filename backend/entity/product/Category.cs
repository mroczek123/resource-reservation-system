using System;
using System.Collections.Generic;
using System.Text;

namespace backend.entity.product
{
    public class Category
    {
        public Guid Id { get; set; }
        public Category ParentCategory { get; set; }
        public string Name { get; set; }
    }
}
