using Car_Dealership_API.Services.Seller;

namespace Car_Dealership_API.Services.Car.Models
{
    public class AllCarsServiceModel 
    {
        public int Id { get; set; }

        public string Condition { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public string ImageUrl { get; set; }

        public string firstLowerImgUrl { get; set; }

        public string secondLowerImgUrl { get; set; }

        public string thirdLowerImgUrl { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Gearbox { get; set; }

        public string Fuel { get; set; }

        public string Color { get; set; }

        public int Power { get; set; }

        public int EngineSize { get; set; }

        public int Mileage { get; set; }

        public int Doors { get; set; }

        public string Description { get; set; }

        public string MiniDescription { get; set; }

        public bool IsOwner { get; set; }

        public int SellerId { get; set; }

        public SellerViewModel Seller { get; set; }
    }
}
