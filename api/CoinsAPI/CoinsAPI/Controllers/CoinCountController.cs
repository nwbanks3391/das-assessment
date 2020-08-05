using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoinsAPI.Interfaces;
using CoinsAPI.Models;

namespace CoinsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CoinCountController : ControllerBase
    {
        private readonly ICoinCountProcessor _processor;

        public CoinCountController(ICoinCountProcessor processor)
        {
            _processor = processor;
        }

        [HttpPost]
        public CoinCount Post([FromBody] TotalValue data)
        {
            var counts = _processor.GetCoinCounts(data.Value);
            return counts;
        }
    }
}
