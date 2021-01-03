using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.data;
using backend.entity.order;
using backend.entity.product;
using backend.entity.table;
using backend.entity.user;
using entity.order;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentityCore<IdentityUser>(x => x.SignIn.RequireConfirmedAccount = true);
            services.AddRazorPages();
            services.AddDbContext<UserContext>(x => x.UseSqlite("Data Source=database.db"));
            services.AddDbContext<TableContext>(x => x.UseSqlite("Data Source=database.db"));
            services.AddDbContext<ProductContext>(x => x.UseSqlite("Data Source=database.db"));
            services.AddDbContext<OrderContext>(x => x.UseSqlite("Data Source=database.db"));
            services.AddControllers();
            services.AddSwaggerGen();

            services.Configure<IdentityOptions>(x =>
            {
                // PASSWORD
                x.Password.RequireDigit = true;
                x.Password.RequireLowercase = true;
                x.Password.RequiredLength = 2;

                // USERNAME
                x.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                x.User.RequireUniqueEmail = false;

                // LOCKOUT SETT
                x.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
                x.Lockout.MaxFailedAccessAttempts = 5;
                x.Lockout.AllowedForNewUsers = true;
            });

            services.ConfigureApplicationCookie(x =>
            {
                //COOKIE SETT
                x.Cookie.HttpOnly = true;
                x.ExpireTimeSpan = TimeSpan.FromMinutes(10);

                // PATHS
                x.LoginPath = "/Identity/Account/Login";
                x.AccessDeniedPath = "/Identity/Account/AccessDenied";
                x.SlidingExpiration = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                var serviceScopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
                using var scope = serviceScopeFactory.CreateScope();
                var context = scope.ServiceProvider.GetService<UserContext>();
                
                SeedData.Initialize(context);
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "API"));
        }


    }
}
