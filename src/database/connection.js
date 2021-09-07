const mongoose = require("mongoose")

mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection
db.on("open", _ => console.log("database ready"))