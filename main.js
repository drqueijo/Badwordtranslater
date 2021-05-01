document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('#btn').addEventListener('click', function(){
       let text = document.querySelector('#text_input').value;
       document.querySelector("#text_output").innerHTML = translate(text)
    })
    
    function translate (text){
        return text
    }
})