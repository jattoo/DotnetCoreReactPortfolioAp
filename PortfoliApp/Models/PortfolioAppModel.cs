using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfoliApp.Models
{
    public class PortfolioAppModel
    {

        [Key]
        public int Id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName ="varchar(MAX)")]
        public string Topics { get; set; }

        [Column(TypeName ="text")]
        public string Details { get; set; }

        [Column(TypeName ="text")]
        public string Specs {get; set;}

    }
}
