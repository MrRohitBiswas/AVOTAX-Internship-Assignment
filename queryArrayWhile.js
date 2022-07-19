function minimumWaitingTime(queries){
    queries.sort();
    let totalSum =0, k=0;
    while(k<queries.length){
        totalSum += queries[k] * (queries.length -(k+1));//adds total occurences by taking common of terms wrt k
        k++;
    }
    
    return totalSum;
}
exports.minimumWaitingTime = new minimumWaitingTime;