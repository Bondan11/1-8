let modeDark = document.querySelector(".modeDark")
modeDark.onclick = function () {
    document.body.classList.toggle("dark")
    if( document.body.classList.contains("dark")) {
        modeDark.src = ""
        modeDark.style.background = "white";
    }else{
        modeDark.src = ""

    }
}


function handleKirim() {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let telepon = document.getElementById('phone').value;
    let skils = document.getElementById('selec').value;
    let deskripsi = document.getElementById('deskripsi').value;

    if (nama == "") {
        return alert("nama nya di isi ")
    } else if (email == "") {
        return alert("email nya di isi ")
    } else if (telepon == "") {
        return alert("Telepon nya di isi ")
    } else if (skils == "") {
        return alert("skils nya di isi ")
    } else if (deskripsi == "") {
        return alert("Deskripsi nya di isi ")
    }

    let emIlPenerima = 'muhammadbondan35422@gmail.com';
    let a = document.createElement('a');
    a.href = `mailto:${emIlPenerima}?subject=${skils}&body=hallo Bondan nih ${nama}
    %0D%0A Email : ${email}
    %0D%0A Phone Number : ${telepon}
    %0D%0A Deskripsi : ${deskripsi}
    `;
    a.click()


}