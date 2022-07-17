using System.ComponentModel.DataAnnotations;

namespace Car_Dealership_API.Data.Models
{
    public class Make
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CarMake { get; set; }
    }
}
