const usernameController = (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
}

const searchController = (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Hello ${keyword}`);
}

export { searchController, usernameController };
