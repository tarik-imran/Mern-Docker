var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { default: mongoose } = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
main().catch((err) => console.log(err));
async function main() {
  console.log("I am in");
  //const client = new MongoClient();
  MongoClient.connect(
    "mongodb://admin:password@mongo:27017?directConnection=true&authSource=admin&replicaSet=replicaset&retryWrites=true",
    function (err, client) {
      if (err) throw err;
      else {
        console.log("connect");
      }
    }
  );
  // await mongoose.connect(
  //   "mongodb://admin:password@mongo:27017?directConnection=true&authSource=admin&replicaSet=replicaset&retryWrites=true"
  // );
  // console.log("end");
}

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// const cors = require("cors");
// const whitelist = [
//   "http://localhost:3000",
//   "http://localhost:4000",
//   "http://localhost:5000",
// ];
// const corsOptions = {
//   Credential: true,
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
var app = express();
//app.use(cors(corsOptions));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
