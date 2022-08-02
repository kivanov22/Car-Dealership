using Car_Dealership_API.Services.Car.Models;

namespace Car_Dealership_API.Services.Seller
{
    public class SellerViewModel
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Phone { get; set; }


        public string Email { get; set; }

        public string UserId { get; set; }

        public string Address { get; set; }

        public IEnumerable<AllCarsServiceModel> Cars { get; init; } = new List<AllCarsServiceModel>();
    }
}
