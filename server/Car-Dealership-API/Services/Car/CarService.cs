using Car_Dealership_API.Data;
using Car_Dealership_API.Services.Car.Models;
using Microsoft.EntityFrameworkCore;

namespace Car_Dealership_API.Services.Car
{
    public class CarService : ICarService
    {
        private readonly CarDealershipDbContext _context;

        public CarService(CarDealershipDbContext context)
        {
            _context = context;
        }

        public Task AddNewCarAsync(AllCarsServiceModel car)
        {
            throw new NotImplementedException();
        }

        //public AllCarsServiceModel All(CarSorting sorting = CarSorting.DateCreated, int currentPage = 1, int carsPerPage = int.MaxValue)
        //{
        //    var carsQuery = _context.Cars;
        //}

        public IEnumerable<AllCarsServiceModel> ByUser(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<AllCarsServiceModel> GetCarByIdAsync(int id)
        {
            var carDetails = await _context.Cars
                .Include(s => s.Seller)
                .FirstOrDefaultAsync(c => c.Id == id);

            var result = new AllCarsServiceModel()
            {
                Id = carDetails.Id,
                Condition = carDetails.Condition,
                Make = carDetails.Make,
                Model = carDetails.Model,
                ImageUrl = carDetails.ImageUrl,
                firstLowerImgUrl = carDetails.firstLowerImgUrl,
                secondLowerImgUrl = carDetails.secondLowerImgUrl,
                thirdLowerImgUrl = carDetails.thirdLowerImgUrl,
                Year = carDetails.Year,
                Price = carDetails.Price,
                Gearbox = carDetails.Gearbox,
                Fuel = carDetails.Fuel,
                Color = carDetails.Color,
                Power = carDetails.Power,
                EngineSize = carDetails.EngineSize,
                Mileage = carDetails.Mileage,
                Doors = carDetails.Doors,
                Description = carDetails.Description,
                MiniDescription = carDetails.MiniDescription,
                IsOwner = carDetails.IsOwner,
                SellerId= carDetails.SellerId,
               // Seller = carDetails.Seller,
            };

            return result;
        }

        public Task UpdateCarAsync(AllCarsServiceModel car)
        {
            throw new NotImplementedException();
        }
    }
}
