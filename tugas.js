class Pesawat {
    constructor(nama, merk, tahun, warna) {
        this.nama = nama;
        this.Kapasitas = Kapasitas;
        this.tahun = tahun;
        this.warna = warna;
    }

    infoPesawat() {
        return `Pesawat ${this.nama} adalah ${this.Kapasitas} tahun ${this.tahun} berwarna ${this.warna}.`;
    }
}

class PesawatPenumpangSipil extends Pesawat {
    constructor(nama, merk, tahun, warna, Kapasitaspenumpang) {
        super(nama, merk, tahun, warna); 
        this.kapasitaspenumpang = kapasitaspenumpang; 
    }

    infoPesawatsipil() {
        return `${this.infoPesawat()} Pesawat ini memiliki kapasitas penumpang ${this.Kapasitaspenumpang} orang.`;
    }
}

const PesawatGaruda = new Garuda("Boeing 777-300ER", "162kursi", 2023, "Putihbiru");
const PesawatCitilink = new Citilink("Airbus 330-900 NEO", "260-300kursi", 2017, "putihhijau");
const PesawatBatik = new Batik("Boeing 737-800", "156kursi", 2013, "putihmerah");

console.log(pesawatgaruda.infoPesawat());

console.log(pesawatCitilink.infoPesawat());

console.log(pesawatBatik.infoPesawat());
