def convertToRoman(Num : int):
    RomanNum = {
        1 : 'I',
        4: 'IV',
        5 : 'V',
        9 : 'IX',
        10 : 'X',
        40 : 'XL',
        50 : 'L',
        90: 'XC',
        100 : 'C',
        400 : 'CD',
        500 : 'D',
        900 : 'CM',
        1000 : 'M'
    }
    result = []
    i = 0
    while True:
        if Num in RomanNum:
            result.append(RomanNum[Num])
            Num -= Num
        if Num > list(reversed(RomanNum))[i]:
            result.append(RomanNum[list(reversed(RomanNum))[i]])
            Num -= list(reversed(RomanNum))[i]
        else:
            i+=1
        if Num == 0:
            result = ''.join(result)
            return result

convertToRoman(3999)


