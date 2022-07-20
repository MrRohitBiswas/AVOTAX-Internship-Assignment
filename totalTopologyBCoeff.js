function numberOfBinaryTreeTopologies(n) {
    function binomialCoeff(n, k) {
      let res = 1;
      if (k > n - k)
        k = n - k;
      for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res = Math.floor(res / (i + 1));
      }
      return res;
    }
    
    c = binomialCoeff(2 * (n), n);
    return Math.floor(c / (n + 1));
  }
  
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;