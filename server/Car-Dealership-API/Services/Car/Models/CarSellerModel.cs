namespace Car_Dealership_API.Services.Car.Models
{
    public class CarSellerModel
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

        //public int Id { get; set; }



        //public string FullName { get; set; }

        //public string Phone { get; set; }


        //public string Email { get; set; }

        //public string UserId { get; set; }

        //public string Address { get; set; }

        //public IEnumerable<AllCarsServiceModel> Cars { get; init; } = new List<AllCarsServiceModel>();
    }
}
