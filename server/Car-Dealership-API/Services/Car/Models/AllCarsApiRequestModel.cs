namespace Car_Dealership_API.Services.Car.Models
{
    public class AllCarsApiRequestModel
    {
        public CarSorting Sorting { get; init; }

        public int CurrentPage { get; init; } = 1;

        public int CarsPerPage { get; init; } = 10;
    }
}
