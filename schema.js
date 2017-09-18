const fetch = require('node-fetch')

const x = fetch(`https://www.goodreads.com/author/show.xml?id=${args.id}&key=risKm8wwXsIcyEiTktvA`
)
.then(response => response.text())
