function maxProfitWithKTransactions(prices,k){
    if(k>prices.length/2){
     let res=0;
     for(let i =1;i<prices.length;i++)
     res += Math.max(0,prices[i]-prices[i-1]);
     return res;
    }
    let dp = new Array(k+1).fill(0);
    for(let z = 0;z< dp.length;z++)
     dp[z]= new Array(prices.length).fill(0);
 //    let prevUpdated =0;
    for(let t=1;t<=k;t++){
     let profit =0-prices[0];
     for(let i =1;i<prices.length;i++){
         // minPrice= Math.min(minPrice, prices[i]-(i>0?prevUpdated:0))
         // prevUpdated=dp[i];
         // dp[i] =Math.max((i>0?dp[i-1]:0),prices[i]-minPrice)
         dp[t][i]=Math.max(dp[t][i-1],profit+prices[i]);
         profit = Math.max(profit,dp[t-1][i-1]-prices[i]);
     }
    }
    return dp[k][prices.length-1];
 }
 exports.maxProfitWithKTransactions =maxProfitWithKTransactions;
