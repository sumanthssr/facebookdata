using Microsoft.EntityFrameworkCore;
using WebApi.FacebookEntities;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WebApi.FacebookEntities;
using WebApi.Helpers;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using dataservice;
namespace WebApi.Helpers
{
    public class FacebookDataContext : DbContext
    {
        public FacebookDataContext(DbContextOptions<FacebookDataContext> options) : base(options) { }

        public DbSet<FacebookUser> FacebookUser { get; set; }
    }
}