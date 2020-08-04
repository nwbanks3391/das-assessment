using api;

public class CoinCountProcessor : ICoinCountProcessor
{
    private static readonly CoinType[] CoinTypes = new CoinType[]
    {
        new CoinType {Name = "SilverDollar", Value = 100 },
        new CoinType {Name = "HalfDollar", Value = 50 },
        new CoinType {Name = "Quarter", Value = 25 },
        new CoinType {Name = "Dime", Value = 10 },
        new CoinType {Name = "Nickel", Value = 5 },
        new CoinType {Name = "Penny", Value = 1 },
    };

    public CoinCount GetCoinCounts(decimal value)
    {
        var CentsRemaining = value * 100;
        var FinalValues = new CoinCount();

        foreach (CoinType coin in CoinTypes){
            if(coin.Value == 1){
                FinalValues.GetType().GetProperty(coin.Name).SetValue(FinalValues, decimal.ToInt32(CentsRemaining));
            } else {
                var count = CentsRemaining / coin.Value;
                //set the count value in the data to be returned
                FinalValues.GetType().GetProperty(coin.Name).SetValue(FinalValues, decimal.ToInt32(count));
                //remove the counted cents from CentsRemaining
                CentsRemaining = CentsRemaining % coin.Value;
            }
        }

        return FinalValues;

    }
}