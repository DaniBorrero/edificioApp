from mailjet_rest import Client
import os
api_key = 'cc580c7f14b0cfdc5af6343135b8b7d5'
api_secret = 'e5865e3a1325358760fbb08d3f02a076'
mailjet = Client(auth=(api_key, api_secret), version='v3.1')
data = {
  'Messages': [
    {
      "From": {
        "Email": "tuedificioapp@gmail.com",
        "Name": "tuedificio"
      },
      "To": [
        {
          "Email": "tuedificioapp@gmail.com",
          "Name": "tuedificio"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
}
result = mailjet.send.create(data=data)

