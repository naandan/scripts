# naandan/scripts

Koleksi script sederhana yang bisa dipakai lewat **CDN**.

## Cara pakai

Panggil script lewat jsDelivr dengan format:

```
https://cdn.jsdelivr.net/gh/naandan/scripts@[commit hash]/[filename].js
```

Ganti `[filename].js` dengan nama file yang mau dipakai.

Contoh:

```
<script src="https://cdn.jsdelivr.net/gh/naandan/scripts@8f183a008a4c72ac3f709d29ea2b4d265e29ca1f/form-submit.js"></script>
```

## Cara nyimpen script

* Tambahin file `.js` baru di repo ini (misalnya `toast.js`).
* Push ke repo.
* Script langsung bisa dipanggil lewat URL:

```
https://cdn.jsdelivr.net/gh/naandan/scripts@8f183a008a4c72ac3f709d29ea2b4d265e29ca1f/toast.js
```

## Daftar script

* **form-status.js** → munculin popup sukses/gagal berdasarkan query param `?status=`
