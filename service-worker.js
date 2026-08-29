const CACHE='kanji-battle-v2';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./assets/img_001_59212387d4.png", "./assets/img_002_fb75025929.png", "./assets/img_003_efccc97fc4.png", "./assets/img_004_875bcd1061.png", "./assets/img_005_44ceefbe06.png", "./assets/img_006_20b0ae278d.png", "./assets/img_007_75e505442a.png", "./assets/img_008_fc0ab87cb8.jpg", "./assets/img_009_334c05135b.jpg", "./assets/img_010_65533748e0.jpg", "./assets/img_011_b55a32476a.png", "./assets/img_012_93186cf087.png", "./assets/img_013_0e278c90ca.png", "./assets/img_014_2b1abde997.png", "./assets/img_015_f9822339b0.png", "./assets/img_016_7dd2016818.png", "./assets/img_017_2eb6dcd329.png", "./assets/img_018_5acad91a75.png", "./assets/img_019_bb39644710.png", "./assets/img_020_7987f45d53.png", "./assets/img_021_2edcbe6391.png", "./assets/img_022_b238ed4e69.png", "./assets/img_023_f4234ec069.png", "./assets/img_024_198b429f20.png", "./assets/img_025_6df2f104df.png", "./assets/img_026_35b523b64e.png", "./assets/img_027_2235b1f6d7.png", "./assets/img_028_afc4f6d4c3.png", "./assets/img_029_664453bef2.png", "./assets/img_030_b9205611d0.png", "./assets/img_031_99d77a81ca.png", "./assets/img_032_311a4fe694.png", "./assets/img_033_04cc6bad25.png", "./assets/img_034_0c7c9d3a3e.png", "./assets/img_035_e4c266487f.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
  const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return resp;
 })));
});
