using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
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

        // [HttpGet]
        // public string Get()
        // {
        //     return "Hello World!";
        // }

        [HttpPost]
        public CoinCount Post([FromBody] TotalValue data) {
            var counts = new CoinCount();
            counts = _processor.GetCoinCounts(data.Value);
            return counts;
        }
    }
}
