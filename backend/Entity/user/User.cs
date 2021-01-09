using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Newtonsoft.Json;

namespace backend.entity.user
{
    public class User
    {
        public User( string userName, Right rights, string password)
        {
            Id = Guid.NewGuid();
            UserName = userName;
            Rights = rights;
            Password = password;
        }

        public Guid Id { get; set; }
        public string UserName { get; set; }
        public Right Rights { get; set; }
        public string Password { get; set; }
        
      
        public List<RefreshToken> RefreshTokens { get; set; }
        
        public enum Right
        {
            User,
            Client,
            Worker
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