$(function (){
    $('#btn0').on('click',function () {
        var array = [];
        var min = 0 ;
        var max = 2 ;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    console.log(a);

    if (a==0) {
        console.log("ぉぉぉぉぉぉお")
    }  else if (a==1){
        console.log("勝ち")
    }
    else{
        console.log("負け")
    }})

    $('#btn1').on('click',function () {
        var min = 0 ;
        var max = 2 ;
        var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;    
    if (a==0) {
        console.log("負け")
    } else if (a==1){console.log("あいこ")}
    else{console.log("勝ち")}})
           
    $('#btn2').on('click',function () {
        var min = 0 ;
        var max = 2 ;
        var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        console.log(a);
    if (a==0) {
        console.log("勝ち")
    } else if(a==1){console.log("負け")}
    else{console.log("ふおおおおおおおおお")}})});