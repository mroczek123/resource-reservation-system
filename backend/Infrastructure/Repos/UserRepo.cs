using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using backend.entity.product;
using backend.entity.user;
using entity.order;


namespace backend
{
    public class UserRepo
    {
        public User InsertUserEntity( UserContext context, User product)
        {
            context.UserSet.Add(product);
            return product;
        }

        public User GetUser(UserContext context, Id id)
        {
            return context.UserSet.Single(b => b.Id == id);
           
        }
    }    
}
