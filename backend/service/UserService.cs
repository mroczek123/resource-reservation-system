using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SQLite;
using System.Linq;
using System.Security.Claims;
using backend.entity;
using backend.entity.user;
using backend.entity.utilites;
using backend.managers;
using entity.order;

namespace backend.service
{
    public class UserService
    {
        public DataContext _users;

        public UserService(DataContext users)
        {
            _users = users;
        }
      
        public Token Login(Authentication authentication)
        {
            User user = _users.UserSet.ToList().Find(u => u.UserName == authentication.Username);

            bool validPassword = user.Password == authentication.Password;

            if (validPassword)
            {
                var refreshToken = TokenManager.GenerateRefreshToken(user);

                if (user.RefreshTokens == null)
                    user.RefreshTokens = new List<RefreshToken>();
                _users.Remove(user);
                user.RefreshTokens.Add(new RefreshToken(user.Id, refreshToken.refreshToken));
                _users.Add(user);

                return new Token
                {
                    AccessToken = TokenManager.GenerateAccessToken(user),
                    RefreshToken = refreshToken.jwt,
                    UserId = user.Id
                };
            }
            else
            {
                throw new System.Exception("Username or password incorrect");
            }
        }

        public Token Refresh(Claim userClaim, Claim refreshClaim)
        {
            User user = _users.UserSet.ToList().Find(u => u.UserName == userClaim.Value);

            if (user == null)
                throw new System.Exception("User doesn't exist");

            if (user.RefreshTokens == null)
                user.RefreshTokens = new List<RefreshToken>();

            RefreshToken token = user.RefreshTokens.FirstOrDefault(x => x.RefreashToken == refreshClaim.Value);

            if (token != null)
            {
                var refreshToken = TokenManager.GenerateRefreshToken(user);
                _users.Remove(user);
                user.RefreshTokens.Add(new RefreshToken( user.Id,refreshToken.refreshToken));

                user.RefreshTokens.Remove(token);

                _users.Add(user);

                return new Token
                {
                    AccessToken = TokenManager.GenerateAccessToken(user),
                    RefreshToken = refreshToken.jwt,
                    UserId = user.Id
                };
            }
            else
            {
                throw new System.Exception("Refresh token incorrect");
            }
        }

        public void Remove(Guid userId)
        {
            User SelectedUser = _users.UserSet.ToList()
                .Find(x => x.Id == userId);
            
            if (SelectedUser == null)
                throw new SystemException("User not found.");
            else
                _users.Remove(SelectedUser);
        }

        public void Add(User user)
        {
            _users.Add(user);
        }

        public User Get(Guid userId)
        {
          return _users.UserSet.ToList().Find(u => u.Id == userId);
        }

        public IEnumerable<User> GetAll()
        {
            try
            {
                return _users.UserSet.ToList();
            }
            catch (NullReferenceException e)
            {
               return new List<User>();
            }   
        }

        public void Update(Guid userId, User user)
        {
          User oldUser =  _users.UserSet.ToList().Find(u => u.Id == userId);
            _users.Remove(oldUser);
            _users.Add(user);
        }
    }
}