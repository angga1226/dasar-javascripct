// let tes = (nama, waktu) => {return `Hola ${nama},Selamat ${waktu}`;}
// console.log(tes(`Djohan nussy`, `Pagi`));

//implisit return
//jika parameternya hanya satu bisa menggunakan method ini
// let tes = nama => `Hola ${nama}, Selamat datang`;
// console.log(tes(`tanggang`));

let siswa = [`Tanggang`, `Angga`, `Haya`];

let jmlh_huruf = siswa.map(nama => ({nama: nama, jmlh_huruf: nama.length }));
console.table(jmlh_huruf);