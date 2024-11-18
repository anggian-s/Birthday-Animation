document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "echa" && password === "101110110101010111") {
    Swal.fire({
      icon: "success",
      title: "Teka-teki telah dipecahkan, Kamu Keren!",
      text: "Selamat menikmati!",
      showConfirmButton: false,
      timer: 4200,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Ada Cluenya loh",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}