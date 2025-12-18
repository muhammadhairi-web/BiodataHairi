
document.getElementById("darkToggle").onclick = function () {
    document.body.classList.toggle("dark");
    this.innerText = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
};

function kirimPesan() {
    let nama = document.getElementById("namaForm").value;
    let email = document.getElementById("emailForm").value;
    let pesan = document.getElementById("pesanForm").value;

    if (nama === "" || email === "" || pesan === "") {
        document.getElementById("notif").innerText = "Harap isi semua data!";
        return;
    }

    document.getElementById("notif").innerText = "Pesan berhasil dikirim!";
}

function hitungKubus() {
    let R = document.getElementById("rKubus").value;
    let volume = Math.pow(R, 3);
    document.getElementById("hasilKubus").innerText = "Volume Kubus = " + volume;
}

function hitungBalok() {
    let p = document.getElementById("pBalok").value;
    let l = document.getElementById("lBalok").value;
    let t = document.getElementById("tBalok").value;
    let volume = p * l * t;
    document.getElementById("hasilBalok").innerText = "Volume Balok = " + volume;
}

function hitungLimas() {
    let la = document.getElementById("laLimas").value;
    let t = document.getElementById("tLimas").value;
    let volume = (1/3) * la * t;
    document.getElementById("hasilLimas").innerText = "Volume Limas = " + volume;
}

function hitungPrisma() {
    let a = document.getElementById("aPrisma").value;
    let tSegitiga = document.getElementById("tSegitiga").value;
    let tPrisma = document.getElementById("tPrisma").value;
    let volume = 0.5 * a * tSegitiga * tPrisma;
    document.getElementById("hasilPrisma").innerText = "Volume Prisma Segitiga = " + volume;
}