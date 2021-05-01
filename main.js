document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('#btn').addEventListener('click', function(){
       let text = document.querySelector('#text_input').value;
       document.querySelector("#text_output").innerHTML = translate(text)
    })
    
    function translate (text){
        var chars = {'a':'@','e':'3','i':'1','o':'0'};
        text.toLowerCase();
        return text.replace(/[aeio]/gi, m => chars[m]);
    }
})