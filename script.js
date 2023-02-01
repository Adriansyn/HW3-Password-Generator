function generate_password() {
var password =""    
var lowercase = 'abcdefghijklmnopqrstupwxyz'
var uppercase ='ABCDEFGHIJKLMNOPQRSTUPWXYZ'
var symbol ='!@#$%^&*()+~}{[]\:;?></-='
var randomCharTypes = [lowercase,uppercase,symbol]

var length = parseInt(document.getElementById('characterAmountNumber').value)
var lowercaseCheckbox = document.getElementById('includeLowercase').checked
var uppercaseCheckbox = document.getElementById('includeUppercase').checked
var randomNumberCheckbox = document.getElementById('includeNumbers').checked
var symbolCheckbox = document.getElementById('includeSymbols').checked

for (var i = 0; i < length; i++ ) {
    var randomCharType= Math.floor(Math.random() * 4)
    console.log(randomCharType)

    if(randomCharType ==0 && lowercaseCheckbox == true) {
    var random=Math.floor(Math.random() * lowercase.length) 
    password=password+lowercase[random]
    }

    if(randomCharType ==1 && uppercaseCheckbox == true) {
        var random=Math.floor(Math.random() * uppercase.length) 
        password=password+uppercase[random]
        } 
        
    if(randomCharType ==2 && randomNumberCheckbox == true) {
        var random=Math.floor(Math.random() * 10)
        password=password+[random]
        }  
    
    if(randomCharType ==3 && symbolCheckbox == true) {
        var random=Math.floor(Math.random() * symbol.length) 
        password=password+symbol[random]
        }            
}
var generatedResults = document.getElementById('gen-results').innerHTML=password

}



