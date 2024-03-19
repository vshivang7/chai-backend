import express from 'express';
const app=express();
console.log("server is ready");

app.use(express.static('dist'))
app.get('/api/jokes', (req, res) => {
    const jokes=[
    {
      id:1,
      title:'A joke',
      content:'this is joke a'
    },
    {
      id:2,
      title:'B joke',
      content:'this is joke b'
    },
    {
      id:3,
      title:'C joke',
      content:'this is joke c'
    }
  ]
  res.send(jokes);
  });

  const port=process.env.PORT || 3000;
  app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
  })