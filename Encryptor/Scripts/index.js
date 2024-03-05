
function encrypt(){
    let text = document.getElementById('txt_enc').value;
    let string = text;
    let mapObj = {
        e:'enter',
        a:'ai',
        i:'imes',
        o:'ober',
        u:'ufat'
    };
    string = string.replace(/[eaiou]/g, function(matched){
        return mapObj[matched];
        
    });
    let output = document.getElementById('output');
    output.innerHTML = string;
}

function uncrypt(){
    let unc_text = document.getElementById('txt_unc').value;
    unc_text=unc_text.replaceAll("enter","e").replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    let un_output = document.getElementById('output');
    un_output.innerHTML = unc_text;
}
