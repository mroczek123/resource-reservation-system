using System;

namespace backend.entity.user
{
    public class RefreshToken
    {
        public RefreshToken(Guid id, string refreashToken)
        {
            Id = id;
            RefreashToken = refreashToken;
        }

        public Guid Id {get;set;}
        public string RefreashToken {get;set;}
    }
}