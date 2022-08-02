using Car_Dealership_API.Data;
using Car_Dealership_API.Services.Car.Models;

namespace Car_Dealership_API.Services.Car
{
    public class CarService : ICarService
    {
        private readonly CarDealershipDbContext _context;

        public CarService(CarDealershipDbContext context)
        {
            _context = context;
        }

        //public AllCarsServiceModel All(CarSorting sorting = CarSorting.DateCreated, int currentPage = 1, int carsPerPage = int.MaxValue)
        //{
        //    var carsQuery = _context.Cars;
        //}

        public IEnumerable<AllCarsServiceModel> ByUser(string userId)
        {
            throw new NotImplementedException();
        }
    }
}
