using System;
using System.Collections.Generic;
using System.Text;

namespace backend.entity.product
{
    public class ProductConfiguration
    {
        public Guid Id { get; set; }
        public string ConfigName { get; set; }
        
        public List<Option> Options { get; set; }
    }
}
