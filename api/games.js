module.exports = async (req, res) => {
  try {
    const apiRes = await fetch('https://worldcup26.ir/get/games');
    if (!apiRes.ok) {
      return res.status(apiRes.status).send(`Error: Origin returned ${apiRes.status}`);
    }
    const data = await apiRes.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send("Proxy error: " + error.message);
  }
};
