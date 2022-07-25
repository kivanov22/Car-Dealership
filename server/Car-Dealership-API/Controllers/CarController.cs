using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Car_Dealership_API.Data.Models;
using Car_Dealership_API.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace Car_Dealership_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDealershipDbContext _context;


        public CarController(CarDealershipDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<JsonResult> Create(Car car)
        {
              await _context.Cars.AddAsync(car);

           await _context.SaveChangesAsync();

            return new JsonResult(Ok(car));
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<JsonResult> Edit([FromRoute] int id,Car car)//maybe add int id
        {
            // var carInDb = _context.Cars.Find(id);//change this to only id
            var carInDb = await _context.Cars
             //.Where(c => c.Id == id)
             .Include(c => c.Seller)
             .FirstOrDefaultAsync(c=>c.Id.Equals(id));

                if (carInDb == null)
                {
                    return new JsonResult(NotFound());
                }

            carInDb.Condition = car.Condition;
            carInDb.Type = car.Type;
            carInDb.Make = car.Make;
            carInDb.Model = car.Model;
            carInDb.ImageUrl = car.ImageUrl;
            carInDb.Year = car.Year;
            carInDb.Price = car.Price;
            carInDb.Gearbox = car.Gearbox;
            carInDb.Fuel = car.Fuel;
            carInDb.Color = car.Color;
            carInDb.Power = car.Power;
            carInDb.EngineSize = car.EngineSize;
            carInDb.Mileage = car.Mileage;
            carInDb.Doors = car.Doors;
            carInDb.Description = car.Description;
            carInDb.MiniDescription = car.MiniDescription;
            carInDb.IsOwner = car.IsOwner;
            carInDb.Seller.Name = car.Seller.Name;
            carInDb.Seller.Phone = car.Seller.Phone;
            carInDb.Seller.Email = car.Seller.Email;
            carInDb.Seller.Address = car.Seller.Address;
           // carInDb = car;
          

            await _context.SaveChangesAsync();

            return new JsonResult(Ok(carInDb));
        }


        [HttpGet]
        public async Task<JsonResult> Latest()
        {
            var result = await _context.Cars
                .OrderByDescending(c => c.Id)
                .Take(6)
                .ToListAsync();

            return new JsonResult(Ok(result));
        }

        [HttpGet]
        public async Task<JsonResult> MyCars(int userId)
        {
            var result = await _context.Cars
                .Where(x => x.SellerId == userId)
                .ToListAsync();

            //var result = _context.Cars
            //  .Where(x => x.SellerId == x.Seller.Id)
            //  .ToList();

            return new JsonResult(Ok(result));
        }

        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var result = await _context.Cars.ToListAsync();

            return new JsonResult(Ok(result));

            //return result;
        }

        [HttpGet("{id}")]
        //[Route("id")]
        public async Task<JsonResult> GetOne(int id)
        {
            //var result = _context.Cars.Find(id);

            var result = await _context.Cars.Where(c => c.Id == id)
                .Include(c => c.Seller)
                .FirstOrDefaultAsync();

            //var car = new Car()
            //{
            //    Id = result.Id,
            //    Condition = result.Condition,
            //    Type = result.Type,
            //    Make = result.Make,
            //    Model = result.Model,
            //    ImageUrl = result.ImageUrl,
            //    Year = result.Year,
            //    Price = result.Price,
            //    Gearbox = result.Gearbox,
            //    Fuel = result.Fuel,
            //    Color = result.Color,
            //    Power = result.Power,
            //    EngineSize = result.EngineSize,
            //    Mileage = result.Mileage,
            //    Doors = result.Doors,
            //    Description = result.Description,
            //    MiniDescription = result.MiniDescription,
            //    IsOwner = result.IsOwner,
            //    SellerId = result.SellerId,
            //    Seller = result.Seller.Name.ToSring(),
            //    Seller = result.Seller.Name,
            //    Seller = result.Seller.Name,

            //    //result.Include(),
            //    //result.Seller.Select()
            //};

            if (result == null)
                return new JsonResult(NotFound());
            //result
            return new JsonResult(Ok(result));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<JsonResult> Delete([FromRoute] int id)
        {
            var result = await _context.Cars.FindAsync(id);

            if (result == null)
                return new JsonResult(NotFound());

            _context.Cars.Remove(result);
            await _context.SaveChangesAsync();

            return new JsonResult(NoContent());
        }



    }
}
