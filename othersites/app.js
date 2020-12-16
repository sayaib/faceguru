var text = ["( ͡° ͜ʖ ͡°)╭∩╮", "( • )( • )ԅ(≖⌣≖ԅ)", "(‿!‿) ԅ(≖‿≖ԅ)","•́ε•̀٥","(͠≖ ͜ʖ͠≖)ε｀●)","( ㅅ )","͡° ͜ʖ ͡ –","ᕤ( ͡~ ͜ʖ ͡°)","( ͠° ͟ʖ ͡°)"];
var counter = 0;
var elem = document.getElementById("myspanid");
var inst = setInterval(change, 1100);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

function copyit(that) {
  setTimeout(function() {
    $('.copid').fadeOut('fast');
  }, 300);


  document.querySelector('.copid').style.display = "block";

  document.querySelector('#fname').value += that.textContent;
  var input = document.createElement('input');
  document.body.appendChild(input)
  input.value = that.textContent
  input.select();
  document.execCommand('copy', false);
  input.remove();


}


function myFunction() {
  var copyText = document.getElementById("fname");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}



$(".logo").on('click', function(){
     window.location = "index.html";
});
