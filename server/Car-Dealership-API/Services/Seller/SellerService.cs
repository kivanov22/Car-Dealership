using Car_Dealership_API.Data;

namespace Car_Dealership_API.Services.Seller
{
    public class SellerService
    {
        private readonly CarDealershipDbContext data;

        public SellerService(CarDealershipDbContext data)
       => this.data = data;


        public int IdByUser(string userId)
            => this.data
            .Sellers
            .Where(s => s.UserId == userId)
            .Select(s => s.Id)
            .FirstOrDefault();

    }
}
