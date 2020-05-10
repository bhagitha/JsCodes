function isNumberKey(evt){
    var charCode=(evt.which)?evt.which:event.keyCode
    if(charCode>31 && (charCode<48||charCode>57))
    return false;
    return true;
}
//let num=parseInt(document.getElementById('txtChar').value);
var  num=[];
var n1,flag=true;
function get_element(){
    num.push(document.getElementById('txtChar').value);
    document.getElementById('txtChar').value='';
    var str='';
    for (let i = 0; i < num.length; i++) {
        str=num[i];
    }
   //document.getElementById('result').innerHTML=str[0];
   n=parseInt(str[0]);
   for (let k = 2; k <= n-1; k++) 
        if(n % k == 0){
       flag = false;
       break;
   }
   if(flag == true)
   document.getElementById('result').innerHTML=`${n} is Prime`;
   else
   document.getElementById('result').innerHTML=`${n}is not Prime`;
   }
   var  num1=[];
  var mf=1;
  var m=0;
  var item;
   function get_element1(){
      
      num1=document.getElementById('txtChar1').value;
      //document.getElementById('txtChar1').value=num1;
for (let i = 0; i < num1.length; i++) {
   for (let j = i; j < num1.length; j++) {
      if (num1[i]==num1[j]) 
      m++;
      if(mf<m){
          mf=m;
          item=num1[i];
      }    
   }
   m=0;
    
}
document.getElementById('result1').innerHTML=`${item} is frequent ${mf} times`;
   }

function get_element2(){

var swapcase=function(letters){
    var newletters="";
    for (let i = 0; i < letters.length; i++) {
        if(letters[i]===letters[i].toLowerCase()){
            newletters+=letters[i].toUpperCase();
        }else{
            newletters+=letters[i].toLowerCase();
               }
        
    }
    return newletters;
}
//var text=document.getElementById('txtChar2').value;
document.getElementById('result2').innerHTML=swapcase(document.getElementById('txtChar2').value);
}

function get_element3(){
    var val=[];
    var sum=0;

    //val.push(document.getElementById('txtChar3').value);
val=document.getElementById('txtChar3').value;

  for (let i = 0; i < val.length; i++) {
    sum+=parseInt(val[i])*parseInt(val[i]);
  }
    
    document.getElementById('result3').innerHTML=sum;

}
function get_element4(){
    var even=""
    for (let index = 0; index <= 15; index++) {
        
        if((index%2)===0)
even+=index+" is even <tb>"
else
even+=index+" is odd <br>"
    }
        document.getElementById('result4').innerHTML=`${even}`;
}
function get_element5(){
    var str=document.getElementById('txtChar5').value;
    if(str.length>10){
    var res=str.substring(0,10);
    document.getElementById('result5').innerHTML=`${res} <BR>..that may truncated <BR>`;
    }else
    document.getElementById('result5').innerHTML=`${str} `;
}
function findLarge(){
    var str,str1;
    str=parseInt(document.getElementById('txtChar6').value);
     str1=parseInt(document.getElementById('txtChar7').value);
    if(str > str1)
    document.getElementById('result6').innerHTML=`${str} is the largest`;
    else
    document.getElementById('result6').innerHTML=`${str1} is the largest`;
}
function get_element8(){
   
    str=document.getElementById('txtChar8').value;
    var res=str.split('').sort().join('');
    document.getElementById('result8').innerHTML=`${res} is in alphabetical order`;
}
function get_element9(){
    var m,n;
    var str="javascript"
    var out=""
    //document.getElementById('result9').innerHTML=str;
    for(m=0;m<str.length;m++){
        for ( n = 0; n <=m; n++) {
          
            out+=str[n]+" ";
        }
       // console.log(out);
        document.write(out+"<br>");
        out=""
    }
    document.write("Please refresh the page to go back")
}
function get_element10(){
    var m,n;
  var out=""
    for(m=1;m<=5;m++){
        for ( n = 1; n <=m; n++) {
          out+="*   ";
           
        }
      // console.log(out);
        document.write(out+"<br>");
        out="";
    }
}
   
