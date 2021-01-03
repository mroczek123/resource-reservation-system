
using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace entity.order
{
    public class Logged
    {
        public Guid LoggedId { get; set; }
        public string Name { get; set; }
        public Right Rights { get; set; }  // Restaurant , User, Employee , Client
        public string Password { get; set; }

        public enum Right
        {
            User = 0,
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