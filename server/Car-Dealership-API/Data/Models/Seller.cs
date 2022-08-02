using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Car_Dealership_API.Data.Models
{
    public class Seller
    {
        [Key]
        public int Id { get; set; } 

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Phone { get; set; }


        [Required]
        public string Email { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string Address { get; set; }

        public IEnumerable<Car> Cars { get; init; } = new List<Car>();
    }


}
