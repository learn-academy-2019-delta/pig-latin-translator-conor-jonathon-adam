// describe("pigLatin", () => {
//     test("returns igpay atinlay", () => {
//         expect(pigLatin("rhythm sucks")).toBe("ythmrhay uckssay")
//         expect(pigLatin("quiet!")).toBe("ietquay!")
//
//     })
// })
// function translatePigLatin(str){
//     var firstPosition=findFirstVowelPosition(str);
//     if(firstPosition>0){
//         return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
//     }
//     return str + "way";
// }
// function findFirstVowelPosition(str){
//     let newArr = str.split('')
//     for (var i=0; i<str.length;i++){
//         if("aeiou".indexOf(str[i]) !== -1){
//             return i;
//         }
//     }
// }
//
// console.log(translatePigLatin(""));


// function pigLatin(str){
//
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let newArr = str.split(' ')
//     // console.log(newArr);
//     // newArr equals split up string, include space in '' otherwise each letter reads as index 0
//
//     let input = newArr.map(value => {
//         let char0 = value.charAt(0)
//         let char1 = value.charAt(1)
//         let char2 = value.charAt(2)
//         let char3 = value.charAt(3)
//         let char4 = value.charAt(4)
//         let char5 = value.charAt(5)
//
//         if(value.charAt(0) == "y"){
//             return value.substring(1) + 'yay'
//         }else if(value.charAt(0) == "s" && value.charAt(1) == "q" && value.charAt(2) == "u"){
//             return value.substring(3) + char0 + char1 + char2 + "ay"
//         }else if(vowels.includes(char0)){
//             return value.substring(0) + 'way'
//         }else if(vowels.includes(char1)){
//             return value.substring(1) + char0 + "ay"
//         }else if(vowels.includes(char2)){
//             return value.substring(2) + char0 + char1 + "ay"
//         }else if(vowels.includes(char3)){
//             return value.substring(3) + char0 + char1 + char2 + "ay"
//         }else if(vowels.includes(char4)){
//             return value.substring(4) + char0 + char1 + char2 + char3 + "ay"
//         }else if(vowels.includes(char5)){
//             return value.substring(5) + char0 + char1 + char2 + char3 + char4 + "ay"
//         }
//     })
//     return input.join(' ')
// }
// console.log(pigLatin("rhythm sucks"))



function pigLatin(){
    let str = document.getElementById('pig')
    // str = str.replace(/[!.?]/g,"")
    let punc = ["!", "?", "."]
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let newArr = str.split(' ')

    // console.log(newArr);
    // newArr equals split up string, include space in '' otherwise each letter reads as index 0

    let input = newArr.map(value => {
    // let char calls uppon the value at the index
        let char0 = value.charAt(0)
        let char1 = value.charAt(1)
        let char2 = value.charAt(2)
        let char3 = value.charAt(3)
        let char4 = value.charAt(4)
        let char5 = value.charAt(5)

        if(value.charAt(0) == "y"){
            return value.substring(1) + 'yay'
    //checks if index of 0 is equal to y if so returns word starting at the 1st index + 'yay'
        }else if(value.charAt(0) == "s" && value.charAt(1) == "q" && value.charAt(2) == "u"){
            return value.substring(3) + char0 + char1 + char2 + "ay"
    //checks if index of 0 is equal to s index of 1 equal to q and index of 2 equal to u if so returns 3rd index + index of 0-2 + "ay"
        }else if(value.charAt(0) == "q" && value.charAt(1) == "u"){
            return value.substring(2) + char0 + char1 +"ay"

    //checks if index of 0 is equal to q, index of 1 is equal to u, if so returns 2nd index + index of 0-1 + "ay"
        }else if(vowels.includes(char0)){
            return value.substring(0) + 'way'
    // checks if vowels land on index of 0, if so return the word plus "way"
        }else if(vowels.includes(char1)){
            return value.substring(1) + char0 + "ay"
    //checks if vowels land on index of 1, if so return the character at 0 + "ay"
        }else if(vowels.includes(char2)){
            return value.substring(2) + char0 + char1 + "ay"
    //checks if vowels land on index of 2, if so return the substring at 2 + characters 0-1 +"ay"
        }else if(vowels.includes(char3)){
            return value.substring(3) + char0 + char1 + char2 + "ay"
    //checks if vowels land on index of 3, if so return the substring at 3 + characters 0-2 + "ay"
        }else if(vowels.includes(char4)){
            return value.substring(4) + char0 + char1 + char2 + char3 + "ay"
    //checks if vowels land on index of 4, if so return the substring at 4 + characters 0-3 + "ay"
        }else if(vowels.includes(char5)){
            return value.substring(5) + char0 + char1 + char2 + char3 + char4 + "ay"
    //checks if vowles land on index of 5, if so return the substring at 5 + characters 0-4 + "ay"
    }
    })
    return document.getElementById('output').innerHTML = input.join(' ')
    // return input.join(' ')
    //calls on the variable "input" and joins the final array
}
console.log(pigLatin("rhythm sucks"))
console.log(pigLatin("quiet!"))














// {
//     let vowels = 'aeioAEIO'
//     let consonant = 'qwrtpsdfghjklzxcvbmQWRTPSDFGHJKLZXCVBM'
//     let arr= str.split("")
//     if(vowels.indexOf(arr.charAt(0) !== -1)){
//             return arr.join('') + "way"
//     }
    // else if(consonant.indexOf(str.charAt(0) !== -1)){
    //     str.splice(consonant)
    //     return arr
    // }
// }

// function pigLatin (str){
//     var arr= str.split('')
//     var arr2 = []
//     if (arr[0]== "a"|| arr[0]=="e"|| arr[0]=="i"||arr[0]=="o"||arr[0]=="u"){
//         return arr.join("") + "way"
//     }
//     else{
//         for(let i=0; i<arr.length;i++){
//             let vowels = 'aeiou'
//             if (arr[i]!== "a"|| arr[i]!=="e"|| arr[i]!=="i"||arr[i]!=="o"||arr[i]!=="u"){
//                 console.log("arr[i]", arr[i]);
//                 var firstLet = arr.slice(0, i).join('')
//                 console.log(firstLet);
//                 var middleLet = arr.join('').substring(i)
//                 var x = middleLet+firstLet+"ay"
//             }
//         }return x
//     }
// //
// //     }
//
// //plural of fox is foxes
//
// console.log(pigLatin("eye"))
// console.log(pigLatin("octopus"))
// console.log(pigLatin("jonathon"))
