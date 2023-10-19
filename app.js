const express = require('express');
const bodyParser = require('body-parser'); // This is used to parse JSON request bodies
const app = express();
const port = 9009;

app.use(bodyParser.json());


// Route 1: Create a new user
app.post('/api/tgsp', (req, res) => {
 
  return res.json({
    gstin: "29AJIPA1572ER2M",
    stateCode: "29",
    stateName: "Karnataka",
    status: "Active",
    validGstin: true,
    pan: "AJIPA1572E",
    bussNature: "SPO",
    regStartDate: "19/03/2018",
    legalName: "ANGAD JASBIRSINGH ARORA"
  })
});

// Route 2: Create a new product
app.post('/api/stageone', (req, res) => {
  res.json({
    Response: "redirectURL|1001|6006|S10"
  });
});

// Route 3: Get a list of users
app.post('/api/stagetwo', (req, res) => {
  res.json({
    Response: "null|1001|null|orderId|null|S01"
  });
});

// Route 4: Get a list of products
app.post('/api/stagethree', (req, res) => {
  res.json({
    data: {
        key1: "Value1"
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
