const express = require('express');

const app = express ();

app.get("/all", (request, response) => {
    response.send({"employees": "all"})
});

