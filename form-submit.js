(function() {
    // load SweetAlert2 kalau belum ada
    if (typeof Swal === "undefined") {
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
      script.onload = showPopup;
      document.head.appendChild(script);
    } else {
      showPopup();
    }
  
    function showPopup() {
      const params = new URLSearchParams(window.location.search);
      const status = params.get("status");
  
      if (status === "success") {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Form sudah terkirim.',
          timer: 3000,
          showConfirmButton: false
        });
      } else if (status === "error") {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Form gagal dikirim, coba lagi.',
          timer: 3000,
          showConfirmButton: false
        });
      }
    }
})();  