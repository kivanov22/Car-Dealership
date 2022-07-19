using Car_Dealership_API.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Car_Dealership_API.Data
{
    public class CarDealershipDbContext:IdentityDbContext<IdentityUser>
    {
        public CarDealershipDbContext(DbContextOptions<CarDealershipDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Truck> Trucks { get; set; }
        public DbSet<Motorcycle> Motorcycles { get; set; }
        
        public DbSet<Seller> Sellers { get; set; }
    }
}
