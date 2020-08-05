using System;
using Xunit;
using CoinsAPI.Processors;
using CoinsAPI.Models;
using Microsoft.AspNetCore.Components.Forms;
using System.Linq;

namespace CoinsAPITest
{
    public class CoinCountProcessorTest
    {
        [Theory]
        [InlineData(0.04, 0, 0, 0, 0, 0, 4)]
        [InlineData(0.05, 0, 0, 0, 0, 1, 0)]
        [InlineData(0.09, 0, 0, 0, 0, 1, 4)]
        [InlineData(0.10, 0, 0, 0, 1, 0, 0)]
        [InlineData(0.24, 0, 0, 0, 2, 0, 4)]
        [InlineData(0.25, 0, 0, 1, 0, 0, 0)]
        [InlineData(0.49, 0, 0, 1, 2, 0, 4)]
        [InlineData(0.50, 0, 1, 0, 0, 0, 0)]
        [InlineData(0.99, 0, 1, 1, 2, 0, 4)]
        [InlineData(1.00, 1, 0, 0, 0, 0, 0)]
        [InlineData(1.56, 1, 1, 0, 0, 1, 1)]
        [InlineData(12.85, 12, 1, 1, 1, 0, 0)]
        [InlineData(2.589, 2, 1, 0, 0, 1, 3)]
        public void TestGetCoinCounts(double input, int SilverDollars, int HalfDollars, int Quarters, int Dimes, int Nickels, int Pennies)
        {
            var obj = new CoinCountProcessor();

            var result = obj.GetCoinCounts((decimal)input);

            Assert.Equal(SilverDollars, result.SilverDollar);
            Assert.Equal(HalfDollars, result.HalfDollar);
            Assert.Equal(Quarters, result.Quarter);
            Assert.Equal(Dimes, result.Dime);
            Assert.Equal(Nickels, result.Nickel);
            Assert.Equal(Pennies, result.Penny);
        }
    }
}
