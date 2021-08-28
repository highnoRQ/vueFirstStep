import express from 'express';
require('dotenv').config();

export default (app, http) => {
  app.use(express.json());
  
  app.get('/foo', (req, res) => {
    res.json({msg: 'foo'});
  });
  
  app.post('/bar', (req, res) => {
    res.json(req.body);
  });

  app.post('/sendMsg', (req, res) =>{
    const AssistantV2 = require('ibm-watson/assistant/v2');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const assistant = new AssistantV2({
      version: '2021-06-14',
      authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
      }),
      serviceUrl: process.env.URL,
    });

    assistant
      .messageStateless({
        assistantId: process.env.ASSISTANT_ID,
        input: {
          'message_type': 'text',
          'text': req.body.text,
        }
      })
      .then(assistantResponse => {
        res.json({
          text: assistantResponse.result.output.generic[0].text
        });
      })
      .catch(err => {
        console.log(err);
      });
  })
}
