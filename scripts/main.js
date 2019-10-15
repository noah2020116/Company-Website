function encrypt(){
    var encrypted = CryptoJS.AES.encrypt(document.getElementById('decryptedtext').value.toString(), document.getElementById('secretpassphrase').value.toString());
    document.getElementById("output").value = encrypted
}

function decrypt(){
    var decrypted = CryptoJS.AES.decrypt(document.getElementById('decryptedtext').value.toString(), document.getElementById('secretpassphrase').value.toString());
    document.getElementById("output").value = decrypted.toString(CryptoJS.enc.Utf8);
}

function openTab(evt, tabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
}


window.onload = function() {
  document.getElementById("defaultOpen").click();
};
