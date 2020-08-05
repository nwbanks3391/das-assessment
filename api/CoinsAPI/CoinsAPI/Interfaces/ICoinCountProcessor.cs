using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoinsAPI.Models;

namespace CoinsAPI.Interfaces
{
    public interface ICoinCountProcessor
    {
        CoinCount GetCoinCounts(decimal value);
    }
}
