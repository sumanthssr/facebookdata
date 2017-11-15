using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;
using Newtonsoft.Json;
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
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using tokennamespace;
using WebApi.GatewayTokenDtos;
namespace ApiGateway.Controllers
{
    [Route("api/[controller]")]
    public class RegisterController : Controller
    {
        
       [HttpPost]
       public async Task<string> RegisterUser(int id,[FromBody]UserDto userDto)
        {  
             if(userDto.secret=="secretcode") 
           {
            GatewayTokenClass objref = new GatewayTokenClass();
           GatewayTokenDto tokendto = new GatewayTokenDto();
           string tokenref = objref.GatewayToken(tokendto).Result ;
           object jsonObject = JsonConvert.DeserializeObject(tokenref);
                //    reqdjson j = JsonConvert.DeserializeObject<reqdjson> (token);
           var obj3= JObject.Parse(tokenref);
           string token= obj3["token"].ToString(); 
           Console.WriteLine("token is {0} ",token );
               //Console.WriteLine("new token is" + token);
           userDto.TokenString = token;

            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));  
            AppConfig api=new AppConfig();          
            await client.PostAsync( api.serverurl + "api/register",new StringContent(JsonConvert.SerializeObject(userDto),Encoding.UTF8,"application/json"));
            return null;
           }
            return null;
        }
        
       
    }
}