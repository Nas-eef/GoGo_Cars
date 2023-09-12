
function check() {

    const name=document.getElementById("input2").value;
    const email=document.getElementById("mail").value;
    const pass=document.getElementById("pass").value;
    var pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    var mailformat=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  
    if(email==""){
            if(pass=="")
            {
            if(name=="")
            {
                document.getElementById("span1").style.display="inline";
                document.getElementById("span2a").style.display="inline";
                document.getElementById("span3a").style.display="inline";
            }
            document.getElementById("span3a").style.display="inline";
            document.getElementById("span2a").style.display="inline";
        }
        document.getElementById("span3a").style.display="inline";
    }
    if (!pass=="") {
        if (!pass.match(pattern)) {
            document.getElementById("span2").style.display="inline";
        }
        if (name=="") {
            document.getElementById("span1").style.display="inline";
        }
        if (email=="") {
            document.getElementById("span3a").style.display="inline";
        }
    }
    if (!email=="") {
        if (!email.match(mailformat)) {
            document.getElementById("span3").style.display="inline";
        }
        if (name=="") {
            document.getElementById("span1").style.display="inline";
        }
        if (pass=="") {
            document.getElementById("span2a").style.display="inline";
        }
    }

}