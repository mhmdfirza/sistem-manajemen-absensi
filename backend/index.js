import express from "express";
const app = express();
const PORT = 3000;

// root route
app.get('/', (req, res) => {
    res.send("Backend Listen");
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Hello ${keyword}`);
})


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
    console.log("Backend Listen");
});
