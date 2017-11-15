using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Runtime.Serialization.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using tokennamespace;
using WebApi.GatewayTokenDtos;



using WebApi.Helpers;

namespace ApiGateway.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
       [HttpPost]
       public async Task<string> ValidateUser([FromBody]UserDto userDto)
        {  
           
           // Console.WriteLine("secret from angular "+userDto.secret); 
           if(userDto.secret=="secretcode") 
           {
           GatewayTokenClass objref = new GatewayTokenClass();
           GatewayTokenDto tokendto = new GatewayTokenDto();
           string tokenref = objref.GatewayToken(tokendto).Result ;
           object jsonObject = JsonConvert.DeserializeObject(tokenref);
        //    reqdjson j = JsonConvert.DeserializeObject<reqdjson> (token);
           var obj3= JObject.Parse(tokenref);
           string token= obj3["token"].ToString(); 
        //    Console.WriteLine("token is {0} ",token );
           Console.WriteLine(" token from token server is " + token);
           userDto.TokenString= token;
           Console.WriteLine("token is "+userDto.TokenString);

           
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();
                 client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));            
            //Console.WriteLine(userDto.Username);
            
            AppConfig api=new AppConfig();
            var stringTask = await client.PostAsync(api.serverurl + "api/authentication",new StringContent(JsonConvert.SerializeObject(userDto),Encoding.UTF8,"application/json"));
            var msg=stringTask.Content.ReadAsStringAsync().Result;
            return msg; 
           }
           return null;
        }
    }
}