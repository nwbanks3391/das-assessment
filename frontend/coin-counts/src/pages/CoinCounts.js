import React from 'react';
import AmountField from '../components/AmountField';

const CoinCounts = () => {
    const [amount, setAmount] = useState(null);
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(false);

    


    return (
        <div>
            <p>Coin Counts Page</p>
            <br/>
            <AmountField/>
        </div>
    );
};

export default CoinCounts;