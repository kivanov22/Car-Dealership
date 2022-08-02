using Car_Dealership_API.Data.Models;

namespace Car_Dealership_API.CarPagination
{
    public class CarResponse
    {
        public List<Car> Cars { get; set; } = new List<Car>();

        public int Pages { get; set; }

        public int CurrentPage { get; set; }

        //sorting asc,desc,creationDate
    }
}
