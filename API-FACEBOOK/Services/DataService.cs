using System;
using WebApi.FacebookEntities;
using WebApi.Helpers;
namespace dataservice
{
    public interface IDataService
    {
        FacebookUser Create(FacebookUser user);
       
    }
    public class DataServiceClass : IDataService
    {
         private FacebookDataContext _context;

        public DataServiceClass(FacebookDataContext context)
        {
            _context = context;
        }
         public FacebookUser Create(FacebookUser user)
        {
             _context.FacebookUser.Add(user);         
             _context.SaveChanges();
              return user;
        }

    }
}