using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using static backend.entity.user.User;

namespace backend.entity.user
{
    public class LogIn
    {
        public LogIn(Guid User_Id, string Name, Right Rights)
        {
            this.User_Id = User_Id;
            this.Name = Name;
            this.Rights = Rights;
        }
        [Key]
        [Column(TypeName = "integer")]
        public Guid User_Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public Right Rights { get; set; }
    }
}
