const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const desiredOrder = ["FId","Id","UId","BId","CO2","WS","PAR","CT","CH","N","P","K","SM","ST","EC","F1","F2","F3","F4","F5","F6","F7","F8","Clear","NIR"];

app.post('/log', (req, res) => {
    const orderedData = {};
    desiredOrder.forEach(key => {
        if (key in req.body) {
            orderedData[key] = req.body[key];
        }
    });
    console.log('Ordered data:', orderedData);
    res.json({ status: 'success', received: orderedData });
});
app.listen(port, () => {
    console.log(`Railway server running on port ${port}`);
});
