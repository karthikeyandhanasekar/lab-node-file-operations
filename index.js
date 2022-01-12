
const { data } = require('./data')
const fs = require('fs')
const crypto = require('crypto');


const password = value => crypto.createHmac('sha256', `a secret`).update(value).digest('hex');

const value = data({
    password: password("prograd123"),
    userid: 201,
    name: "ProGrad",
    username: "Developer",
    year: 2020,
    qualification: "PhD"
})


fs.writeFileSync(`message.txt`, `ProGrad Details

${Object.keys(value).map(ele => `${ele} -> ${value[ele]}`).join("\n")}`)
