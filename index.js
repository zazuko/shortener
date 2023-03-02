async function shorten(url, _fetch = fetch) {
  const res = await _fetch("https://s.zazuko.com/api/v1/shorten/", {
    method: "POST",
    body: new URLSearchParams({ url }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.text();
}

module.exports = { shorten };
