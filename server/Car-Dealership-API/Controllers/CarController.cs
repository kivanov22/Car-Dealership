using Car_Dealership_API.CarPagination;
using Car_Dealership_API.Data;
using Car_Dealership_API.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Car_Dealership_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDealershipDbContext _context;
        private readonly IHttpContextAccessor _httpContext;
        private readonly UserManager<IdentityUser> _userManager;

        public CarController(CarDealershipDbContext context,
            IHttpContextAccessor httpContext,
            UserManager<IdentityUser> userManager)
        {
            _context = context;
            _httpContext = httpContext;
            _userManager = userManager;
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
        public async Task<JsonResult> Edit([FromRoute] int id, Car car)
        {
            // var carInDb = _context.Cars.Find(id);//change this to only id
            var carInDb = await _context.Cars
             //.Where(c => c.Id == id)
             .Include(c => c.Seller)
             .FirstOrDefaultAsync(c => c.Id.Equals(id));

            if (carInDb == null)
            {
                return new JsonResult(NotFound());
            }

            carInDb.Condition = car.Condition;
            carInDb.Make = car.Make;
            carInDb.Model = car.Model;
            carInDb.ImageUrl = car.ImageUrl;
            carInDb.firstLowerImgUrl = car.firstLowerImgUrl;
            carInDb.secondLowerImgUrl = car.secondLowerImgUrl;
            carInDb.thirdLowerImgUrl = car.thirdLowerImgUrl;
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
            carInDb.Seller.FullName = car.Seller.FullName;
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
        [Route("{userId}")]
        public async Task<JsonResult> MyCars([FromRoute]string userId)
        {

            var result = await _context.Cars
                .Where(x => x.Seller.UserId == userId)
                .ToListAsync();

            return new JsonResult(Ok(result));
        }

        [HttpGet("{page}")]
        public async Task<ActionResult<List<Car>>> GetAll(int page)
        {
            if (_context.Cars == null)
                return NotFound();

            var pageResults = 5f;//10
            var pageCount = Math.Ceiling(_context.Cars.Count() / pageResults);

            var cars = await _context.Cars
                .Include(s=>s.Seller)
                .Skip((page -1) * (int)pageResults)
                .Take((int)pageResults)
                .ToListAsync();

            var response = new CarResponse
            {
                Cars  = cars,
                CurrentPage = page,
                Pages = (int)pageCount
            };

            //add sorting asc ,desc ,newest

            return (Ok(response));
        }

        [HttpGet("{id}")]
        //[Route("id")]
        public async Task<JsonResult> GetOne(int id)
        {
            //var result = _context.Cars.Find(id);

            var result = await _context.Cars
                .Where(c => c.Id == id)
                .Include(c => c.Seller)
                .FirstOrDefaultAsync();

           

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

        [HttpGet]
        public async Task<JsonResult> GetMake()
        {
            var result = await _context.Cars
                .Select(m => m.Make)
                .Distinct()
                .ToListAsync();
               

            return new JsonResult(Ok(result));
        }

        [HttpGet]
        public async Task<JsonResult> GetModel()//string make
        {
            var result = await _context.Cars
                //.Where(m=>m.Make == make)
                .Select(m => m.Model)
                .Distinct()
                .ToListAsync();


            return new JsonResult(Ok(result));
        }


        [HttpGet("{criteria}")]
        public async Task<JsonResult> SortBy(string criteria)
        {
            var result = new List<Car>();

            if(criteria == "descending")
            {
                result = await _context.Cars
               .OrderByDescending(x=>x.Id)
               .ToListAsync();

               return new JsonResult(Ok(result));
            }
            else if(criteria == "ascending")
            {
                 result = await _context.Cars
                 .OrderBy(x => x.Id)
                    .ToListAsync();

                return new JsonResult(Ok(result));
            }
            else if(criteria == "priceHighest")
            {
                 result = await _context.Cars
              .OrderByDescending(x => x.Price)
              .ToListAsync();

                return new JsonResult(Ok(result));
            }
            else if (criteria == "priceLowest")
            {
                result = await _context.Cars
              .OrderBy(x => x.Price)
              .ToListAsync();

                return new JsonResult(Ok(result));
            }


            return new JsonResult(Ok(result));
        }

        [HttpGet]
        public async Task<JsonResult> GetCarsByCriteria(string make, string model)
        {
            if(make == null && model ==null)
            {
                return new JsonResult(NotFound());
            }

            var result = await  _context.Cars
                .Where(
                c => c.Make.Contains(make)
                && c.Model.Contains(model))
                .ToListAsync();
               

            return new JsonResult(Ok(result));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> FilterCars(string? condition,string? make,string? model,double? price,
            int? mileage,int? power,string? fuel,int? doors,string? color,int? year)
        {

            IQueryable<Car> query = _context.Cars;

            if (!string.IsNullOrEmpty(condition))
            {
                query = query.Where(c => c.Condition==condition);
            }

            if (!string.IsNullOrEmpty(make))
            {
                query = query.Where(c => c.Make==make);
            }

            if (!string.IsNullOrEmpty(model))
            {
                query = query.Where(c => c.Model.Contains(model));
            }

            if (price!=0)
            {
                query = query.Where(c => price <= c.Price);
            }

            if (mileage != 0)
            {
                query = query.Where(c => mileage <= c.Mileage);
            }

            if (power != 0)//or return all
            {
                query = query.Where(c => power <= c.Power);
            }

            if (!string.IsNullOrEmpty(fuel))
            {
                query = query.Where(c => c.Fuel.Contains(fuel));
            }

            if (!string.IsNullOrEmpty(color))
            {
                query = query.Where(c => c.Color.Contains(color));
            }

            if (doors != 0 && doors<=5)
            {
                query = query.Where(c => doors <= c.Doors);
            }

            if (year != 0 && year >=1950)
            {
                query = query.Where(c => year <= c.Year);
            }
            //condition
            //make
            //model
            //price
            //mileage
            //power
            //fuel
            //doors
            //color
            //year






            return await query.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<JsonResult> GetSellerCity(int id)
        {
            var result = await _context.Cars
                .Include(s=>s.Seller)
                .Where(c=>c.Id == id)
                .FirstOrDefaultAsync();

            var citySeller = result.Seller.Address;

            return new JsonResult(Ok(citySeller));
        }

        [HttpGet("{id}")]
        //[Route("id")]
        public async Task<JsonResult> GetUser(int id)
        {

            var result = await _context.Cars
                .Where(c => c.Id == id)
                .Include(c => c.Seller)
                .FirstOrDefaultAsync();

            if (result == null)
                return new JsonResult(NotFound());

            var ownerId = result.Seller.UserId;
           
          
            return new JsonResult(Ok(ownerId));
        }
    }
}
