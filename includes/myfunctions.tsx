export function UniquicID(length = 16) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

export function returnAllNumbers(d:string)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}

export function returnUsername(d:string)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{} 0-9]/g, '');
}
export function returnAllNumbersWithComma(d:string)
{
  d = String(d).trim();
  return d.replace(/[-+&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}
export function returnMobile(d:string)
{
  d = String(d).trim();
  d = String(d[0]) == "0"?d.replace("0",""):d;
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}
export function returnAllLetter(d:string)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{} 0-9]/g, '');
}
export function checkPassword(d:string){
  var regex = /[a-z]/;
  var regexCap = /[A-Z]/;
  var regexSp = /[!@#$%^&*()\-_=+{};:,<.>]/;
  var regexNum = /[0-9]/;
  if(regex.test(d) && regexCap.test(d) && regexSp.test(d) && regexNum.test(d)) {
        return true;
    }
return false;  
}
export function returnAllLetterWithSpace(d)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{}0-9]/g, '');
}

export function removeComma(str:string){
    if(str === "") {
      return str;
    }
    if(str === ".") {
      return String(str).replace('.','');
    }
    if(String(str) === "00"){
      return "0";
    }
    str = String(str).replace(/[^0-9.]/g,'');
    var getDot = String(str).split(".");
    var firstPart = getDot[0];
    if(firstPart.length >= 4) {
       firstPart = firstPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
    if(getDot.length >= 2){
      return firstPart+"."+getDot[1];
    }
    return firstPart;
  }
export function AddComma(str:string){
  if(str === "") {
    return str;
  }
  if(str === ".") {
    return String(str).replace('.','');
  }
  if(String(str) === "00"){
    return "0";
  }
  str = String(str).replace(/[^0-9.]/g,'');
  var getDot = String(str).split(".");
  var firstPart = getDot[0];
  if(firstPart.length >= 4) {
     firstPart = firstPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
  if(getDot.length >= 2){
    return firstPart+"."+getDot[1];
  }
  return firstPart;
}
 
export function ListOfStates()
{
  return [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ];
}


