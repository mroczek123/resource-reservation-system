using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend
{
    public class Id
    {

        public Id()
        {
            this.value = Guid.NewGuid();
        }

        public Id(Guid value)
        {
            this.value = value;
        }

        [Key]
        [Column(TypeName="guid")]
        public Guid value { get; set; }
    }
}