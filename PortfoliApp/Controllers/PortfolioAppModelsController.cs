using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfoliApp.Models;

namespace PortfoliApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioAppModelsController : ControllerBase
    {
        private readonly PortfolioAppContext _context;

        public PortfolioAppModelsController(PortfolioAppContext context)
        {
            _context = context;
        }

        // GET: api/PortfolioAppModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PortfolioAppModel>>> GetPortfolioAppModels()
        {
            return await _context.PortfolioAppModels.ToListAsync();
        }

        // GET: api/PortfolioAppModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PortfolioAppModel>> GetPortfolioAppModel(int id)
        {
            var portfolioAppModel = await _context.PortfolioAppModels.FindAsync(id);

            if (portfolioAppModel == null)
            {
                return NotFound();
            }

            return portfolioAppModel;
        }

        // PUT: api/PortfolioAppModels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPortfolioAppModel(int id, PortfolioAppModel portfolioAppModel)
        {

            portfolioAppModel.Id = id;

            _context.Entry(portfolioAppModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PortfolioAppModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PortfolioAppModels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PortfolioAppModel>> PostPortfolioAppModel(PortfolioAppModel portfolioAppModel)
        {
            _context.PortfolioAppModels.Add(portfolioAppModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPortfolioAppModel", new { id = portfolioAppModel.Id }, portfolioAppModel);
        }

        // DELETE: api/PortfolioAppModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PortfolioAppModel>> DeletePortfolioAppModel(int id)
        {
            var portfolioAppModel = await _context.PortfolioAppModels.FindAsync(id);
            if (portfolioAppModel == null)
            {
                return NotFound();
            }

            _context.PortfolioAppModels.Remove(portfolioAppModel);
            await _context.SaveChangesAsync();

            return portfolioAppModel;
        }

        private bool PortfolioAppModelExists(int id)
        {
            return _context.PortfolioAppModels.Any(e => e.Id == id);
        }
    }
}
