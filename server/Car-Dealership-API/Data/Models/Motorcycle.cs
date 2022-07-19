using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Car_Dealership_API.Data.Models
{
    public class Motorcycle
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Condition { get; set; }
        [Required]
        public string Type { get; set; }

        [Required]
        public string Make { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string ImageUrl { get; set; }


       
        public int Year { get; set; }

        public double Price { get; set; }

        [Required]
        public string Gearbox { get; set; }

        [Required]
        public string Fuel { get; set; }

        [Required]
        public string Color { get; set; }

        public int Power { get; set; }

        public int EngineSize { get; set; }

        public int Mileage { get; set; }

        public bool IsOwner { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string MiniDescription { get; set; }

        [ForeignKey("SellerId")]
        public int SellerId { get; set; }
        public Seller Seller { get; set; }
    }
}
