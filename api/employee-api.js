const express = require('express');
const router = express.Router();

const data = [
    {
        "firstName": "Peter",
        "lastName": "Smith",
        "role": "Web Developer",
        "department": "Software Delivery"
    },
    {
        "firstName": "Jane",
        "lastName": "Smith",
        "role": "Web Developer",
        "department": "Software Delivery"
    },
    {
        "firstName": "Robert",
        "lastName": "Bloggs",
        "role": "QA Tester",
        "department": "Software Delivery"
    },
    {
        "firstName": "Laura",
        "lastName": "Bloggs",
        "role": "Product Manager",
        "department": "Product Delivery"
    }
];

router.get("/all", (request, response, next) => {
    response.send({"employees": data})
});

module.exports = router;