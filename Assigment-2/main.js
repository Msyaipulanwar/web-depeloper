function tampilkan() {
  var nama = document.getElementById("form").nama.value;
  var role = document.getElementById("form").role.value;
  var availablity = document.getElementById("form").availablity.value;
  var age = document.getElementById("form").age.value;
  var lokasi = document.getElementById("form").lokasi.value;
  var years = document.getElementById("form").years.value;
  var email = document.getElementById("form").email.value;
  document.getElementById("Nama").innerHTML = nama;
  document.getElementById("Role").innerHTML = role;
  document.getElementById("Available").innerHTML = availablity;
  document.getElementById("Age").innerHTML = age;
  document.getElementById("Lokasi").innerHTML = lokasi;
  document.getElementById("Years").innerHTML = years;
  document.getElementById("Email").innerHTML = email;
}