using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Car_Dealership_API.Data.Models;
using Car_Dealership_API.Data;
using Microsoft.AspNetCore.Cors;

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
        public JsonResult CreateEdit(Car car)
        {
            if(car.Id == 0)
            {
                _context.Cars.Add(car);
            }
            else
            {
                var carInDb = _context.Cars.Find(car.Id);

                if (carInDb == null)
                {
                    return new JsonResult(NotFound());
                }

                carInDb = car;
            }

            _context.SaveChanges();

            return new JsonResult(Ok(car));
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var result = _context.Cars.ToList();

            return new JsonResult(Ok(result));

            //return result;
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _context.Cars.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }

        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var result = _context.Cars.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            _context.Cars.Remove(result);
            _context.SaveChanges();

            return new JsonResult(NoContent());
        }

    }
}
