function convertToRoman(Num){
    const RomanNum = [
        [1000 , 'M'],
        [900 , 'CM'],
        [500 ,'D'],
        [400 , 'CD'],
        [100 , 'C'],
        [90, 'XC'],
        [50 , 'L'],
        [40 , 'XL'],
        [10 , 'X'],
        [9 , 'IX'],
        [5 , 'V'],
        [4, 'IV'],
        [1 , 'I']
    ]
    var result = []

    for (i = 0; i < RomanNum.length; i++) {
        if (Num == RomanNum[i][0]){
            result.push(RomanNum[i][1])
            Num -= RomanNum[i][0]
            }
        if(Num > RomanNum[i][0]){
            result.push(RomanNum[i][1])
            Num -= RomanNum[i][0]
            i =-1
        }
        if (Num == 0){
            return result.join('')
            }
    }
    
    
}

console.log(convertToRoman(36))