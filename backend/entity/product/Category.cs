using System;
using System.Collections.Generic;
using System.Text;

namespace backend.entity.product
{
    class Category
    {
        public Category parentCategory { get; set; }
        public string name { get; set; }
    }
}
