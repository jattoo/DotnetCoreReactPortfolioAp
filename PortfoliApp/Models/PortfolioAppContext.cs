using Microsoft.EntityFrameworkCore;

namespace PortfoliApp.Models
{
    public class PortfolioAppContext : DbContext
    {
        public PortfolioAppContext(DbContextOptions<PortfolioAppContext> options) : base (options)
        {
        }
        public DbSet<PortfolioAppModel> PortfolioAppModels { get; set; }
    }
}
