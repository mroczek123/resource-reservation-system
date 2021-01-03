using System;

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

        public Guid value { get; set; }
    }
}