const indexNowKey = "e7a3d9c42b6f4a9fa1c8d0e5b7f92613";
const host = "mydoip.ru";

const payload = {
  host,
  key: indexNowKey,
  keyLocation: `https://${host}/${indexNowKey}.txt`,
  urlList: [
    `https://${host}/`,
    `https://${host}/requisites`,
    `https://${host}/privacy`,
    `https://${host}/sitemap.xml`,
  ],
};

const response = await fetch("https://yandex.com/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const text = await response.text();
  throw new Error(`IndexNow failed: ${response.status} ${response.statusText}\n${text}`);
}

console.log(`IndexNow accepted ${payload.urlList.length} URLs for ${host}.`);
