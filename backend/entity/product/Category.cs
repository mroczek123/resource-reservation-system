using System;
using System.Collections.Generic;
using System.Text;

namespace backend.entity.product
{
    class Category
    {
        public Category ParentCategory { get; set; }
        public string Name { get; set; }
    }
}
