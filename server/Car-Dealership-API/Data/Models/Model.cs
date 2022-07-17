using System.ComponentModel.DataAnnotations;

namespace Car_Dealership_API.Data.Models
{
    public class Model
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CarModel { get; set; }
    }
}
