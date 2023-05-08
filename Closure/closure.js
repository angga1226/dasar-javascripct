// function greeting(name) {
//   var message = "Hello, ";
//   function sayHello() {
//     console.log(message + name);
//   }
//   return sayHello;

// }

// var greet = greeting("John");
// greet(); // output: Hello, Joh

// function salam(nama) {
//   let pesan = 'Hola, '
//   function Hi() {
//     console.log(pesan + nama);
//   }
//   return Hi;
// }

// var panggilNama = salam('Djohan');
// panggilNama();



//FACTORY FUNCTION


// function salam(waktu) {
//   return function (nama) {
//     console.log(`Hola, good ${waktu},Mister ${nama}`);
//   }
// }

// let morning = salam(`Morning`);
// let evening = salam(`Evening`);
// morning(`Djohan`);

function createMahasiswa(nama, jurusan, nilai) {
  return {
    nama: nama,
    jurusan: jurusan,
    nilai: nilai,
    getNilaiHuruf: function() {
      if (this.nilai >= 80) {
        return "A";
      } else if (this.nilai >= 70) {
        return "B";
      } else if (this.nilai >= 60) {
        return "C";
      } else if (this.nilai >= 50) {
        return "D";
      } else {
        return "E";
      }
    }
  };
}

const mahasiswa1 = createMahasiswa("John Doe", "Teknik Informatika", 85);
console.log(mahasiswa1.nama); // output: John Doe
console.log(mahasiswa1.getNilaiHuruf()); // output: A

const mahasiswa2 = createMahasiswa("Jane Doe", "Sistem Informasi", 65);
console.log(mahasiswa2.nama); // output: Jane Doe
console.log(mahasiswa2.getNilaiHuruf()); // output: C