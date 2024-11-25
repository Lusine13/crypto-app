import { useEffect } from "react";
import { requestUrls } from "../../util/constants/requestUrls";
import { useFetch } from "../../hooks/useFetch";

type UserData = {
    id: string;
    name: string;
    current_price: number;
}

const CryptoList = () => {
   const { data, loading, error } = useFetch<UserData[]>({
    url: `${requestUrls.coinsMarkets}?vs_currency=usd`,
   });

   console.log(data);
  
    return (
        <div>
           <h2>CryptoList</h2>
        </div>
    )
};

export default CryptoList;