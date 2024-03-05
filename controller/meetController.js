const axios = require('axios')
const jwt = require('jsonwebtoken');

module.exports = {
    createMeet: (req, res) => {

        const meetingData = req.body

        const secretKey = process.env.JWT_SECRET_KEY
        const appID = process.env.JIO_MEET_API_ID
        const payload = {
            app: appID
        };

        const token = jwt.sign(payload, secretKey, { algorithm: process.env.JWT_ALGORITHM });

        let data = JSON.stringify({meetingData});

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://jiomeetpro.jio.com/api/platform/v1/room',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':token
            },
            data: data
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
}