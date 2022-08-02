using Car_Dealership_API.Services.Car.Models;
using Car_Dealership_API.Data.Models;

namespace Car_Dealership_API.Services.Car
{
    public interface ICarService
    {
        //AllCarsServiceModel All(
        //   CarSorting sorting = CarSorting.DateCreated,
        //   int currentPage = 1,
        //   int carsPerPage = int.MaxValue);

        IEnumerable<AllCarsServiceModel> ByUser(string userId);
    }
}
