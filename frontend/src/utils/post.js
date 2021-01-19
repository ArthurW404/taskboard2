const post = async (url, data) => {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  console.log(resp);
  const processedResp = await resp.json();
  return processedResp;
};

export default post;
