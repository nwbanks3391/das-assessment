using api;

public interface ICoinCountProcessor
{
    CoinCount GetCoinCounts(decimal value);
}