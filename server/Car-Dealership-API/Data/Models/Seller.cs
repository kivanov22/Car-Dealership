using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Car_Dealership_API.Data.Models
{
    public class Seller
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Phone { get; set; }


        [Required]
        public string Email { get; set; }


        [Required]
        public string Address { get; set; }


        [ForeignKey("TruckId")]
        public virtual Truck Truck { get; set; }

        [ForeignKey("CarId")]
        public virtual Car Car { get; set; }


        [ForeignKey("MotorcycleId")]
        public virtual Motorcycle Motorcycle { get; set; }


    }
}
