module.exports = app => {
  app.get('/card/add', addCard(app))
}

const addCard = app => (req, res) => {
  console.log(req)
  app.db.collection('cards').add({
    name: 'Los',
    state: 'CA',
    country: 'USA'
  }).then(() => res.send('card created'))
}
