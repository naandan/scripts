(function() {
            // load SweetAlert2 kalau belum ada
            if (typeof Swal === "undefined") {
              var script = document.createElement("script");
              script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
              script.onload = showToast;
              document.head.appendChild(script);
            } else {
              showToast();
            }
          
            function showToast() {
              const params = new URLSearchParams(window.location.search);
              const status = params.get("status");
          
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
          
              if (status === "success") {
                Toast.fire({
                  icon: "success",
                  title: "Form berhasil dikirim!"
                });
                clearParams();
              } else if (status === "error") {
                Toast.fire({
                  icon: "error",
                  title: "Form gagal dikirim!"
                });
                clearParams();
              }
            }
          
            function clearParams() {
              setTimeout(() => {
                // Hapus query string tanpa reload halaman
                const url = window.location.origin + window.location.pathname;
                window.history.replaceState({}, document.title, url);
              },1000); // 1 detik
            }
          })(); 
