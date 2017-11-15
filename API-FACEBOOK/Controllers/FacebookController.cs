using System;
using WebApi.FacebookEntities;
using WebApi.Helpers;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using WebApi.FacebookDatatransfer;
using AutoMapper;
using dataservice;

namespace SocialEntities.controller
{
    [Route("api/[controller]")]
    public class FacebookapiController : Controller
    {
        private IDataService _userService;
        private IMapper _mapper;
       
        public  FacebookapiController(  IMapper mapper,IDataService userService)
        {
            _userService = userService;
            _mapper = mapper;
        }
            
        [HttpPost]
        public IActionResult FacebookPost([FromBody] FacebookDto facebookdto)
        {
            // public FacebookDataContext _context;
            Console.WriteLine("passing");
            Console.WriteLine("data "+ facebookdto.Email);
              var user = _mapper.Map<FacebookUser>(facebookdto);
            //  _context.FacebookUser.Add( facebookuser);         
            //  _context.SaveChanges();
             var fbuser= _userService.Create(user);
             Console.WriteLine(fbuser.Id);
              Console.WriteLine(fbuser.Email);
               Console.WriteLine(fbuser.Name);
                Console.WriteLine(fbuser.FirstName);
                 Console.WriteLine(fbuser.LastName);
                  Console.WriteLine(fbuser.Provider);
             return Ok();
        }
    }
}