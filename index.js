// Complete script to scrape latest SF BoS agenda

// 1. Download the latest agenda from sfbos.org
require('./src/download-latest-agenda.js')()

// 2. Parse the pdf file into json
.then(newPdfs => require('./src/transform-pdfs-to-json')(newPdfs))

// 3. Upload to api.liquid.vote
.then(newJson => require('./src/upload-new-bills.js')(newJson[0]))
