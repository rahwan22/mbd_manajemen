const database = 'UAS_MBD';
const collection = 'Validasi';

use(database);

// Create collection with validation
db.createCollection("RAHWAN",{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["namaMhs", "Nim", "JK", "Jurusan", "Umur"],
      properties: {
        namaMhs: {
          bsonType: "string",
          minLength: 3,
          maxLength: 50,
          description: "Nama mahasiswa harus berupa string (3-50 karakter) dan wajib diisi"
        },
        Nim: {
          bsonType: "string",
          pattern: "^D\\d{7}$",
          description: "NIM harus berupa string dengan format D diikuti 7 digit angka (contoh: D0222001)"
        },
        JK: {
          enum: ["Laki-laki", "Perempuan"],
          description: "Jenis kelamin hanya boleh 'Laki-laki' atau 'Perempuan'"
        },
        Jurusan: {
          bsonType: "string",
          enum: ["Informatika", "Sistem Informasi", "Teknik Komputer", "Teknik Elektro"],
          description: "Jurusan harus dipilih dari daftar yang tersedia"
        },
        Umur: {
          bsonType: "int",
          minimum: 17,
          maximum: 100,
          description: "Umur harus bilangan bulat antara 17 hingga 100 tahun"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});