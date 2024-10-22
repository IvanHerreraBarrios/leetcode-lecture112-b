var prefixesDivBy5 = function(nums) {
  const result = []
  let binary = ""
  for (let i=0; i < nums.length; i++){
    binary += nums[i]
    const decimal = BigInt('0b' + binary)
    result.push(decimal % 5n === 0n)
  } 
  return result 
};

var prefixesDivBy5 = function(nums) {
    const result = []
    let cur = 0
    for (let i=0; i < nums.length; i++){
      cur = cur * 2 + nums[i] 
      result.push(cur % 5 === 0)
      cur %= 5
    } 
    return result 
  };