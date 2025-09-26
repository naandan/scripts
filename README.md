# naandan/scripts

Koleksi script sederhana yang bisa dipakai lewat **CDN**.

## Cara pakai

Panggil script lewat jsDelivr dengan format:

```
https://cdn.jsdelivr.net/gh/naandan/scripts@latest/[filename].js
```

Ganti `[filename].js` dengan nama file yang mau dipakai.

Contoh:

```
<script src="https://cdn.jsdelivr.net/gh/naandan/scripts@latest/form-status.js"></script>
```

## Cara nyimpen script

* Tambahin file `.js` baru di repo ini (misalnya `toast.js`).
* Push ke repo.
* Script langsung bisa dipanggil lewat URL:

```
https://cdn.jsdelivr.net/gh/naandan/scripts@latest/toast.js
```

## Daftar script

* **form-status.js** → munculin popup sukses/gagal berdasarkan query param `?status=`
