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
        private readonly ILogger<CoinCountController> _logger;

        public CoinCountController(ILogger<CoinCountController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public CoinCount Get()
        {
            var CoinCounts = new CoinCount();
            return CoinCounts;
        }
    }
}
