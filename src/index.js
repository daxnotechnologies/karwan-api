const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users.routes");
const videoRouter = require("./routes/videos.routes");
const bookRequestRouter = require("./routes/bookRequests.routes");
const supplicationRouter = require("./routes/supplications.routes");
const bookRouter = require("./routes/books.routes");
const groupRouter = require("./routes/groups.routes");
const visasRouter = require("./routes/visas.routes");
const ProductRouter = require("./routes/products.routes");
const ProductCartRouter = require("./routes/productCarts.routes");
const BannerRouter = require("./routes/banners.routes");
require("../db/connect");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "1000000kb" }));

app.use(userRouter);
app.use(videoRouter);
app.use(bookRouter);
app.use(supplicationRouter);
app.use(bookRequestRouter);
app.use(groupRouter);
app.use(visasRouter);
app.use(ProductRouter);
app.use(ProductCartRouter);
app.use(BannerRouter);

app.get("/", (req, res) => res.send("Hello Server!"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
