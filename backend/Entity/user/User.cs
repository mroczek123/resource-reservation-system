using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace backend.entity.user
{
    public class User
    {
        public User(string name, Right rights, string password)
        {
            Id = Guid.NewGuid();
            Name = name;
            Rights = rights;
            Password = password;
        }

        [Key]
        [Column(TypeName="TEXT")]
        public Guid Id { get; set; }
        
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Name { get; set; }
        
        [Required]
        [Column(TypeName = "varchar(30)")]
        public Right Rights { get; set; }  // Restaurant, Employee , Client
        
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Password { get; set; }

        public enum Right
        {
            Client = 1,
            Employee = 2,
            Restaurant = 3,
        }

        public static string PasswordCrypt(string Password)
        {
            byte[] salt = new byte[128 / 8];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8)
                );

            return hashed;
        }
    }
}