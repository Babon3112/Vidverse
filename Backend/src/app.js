import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import likeRouter from "./routes/like.routes.js";
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import commentRouter from "./routes/comment.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

//routes declaration
app.use("/vidverse/api/v1/likes", likeRouter);
app.use("/vidverse/api/v1/users", userRouter);
app.use("/vidverse/api/v1/videos", videoRouter);
app.use("/vidverse/api/v1/tweets", tweetRouter);
app.use("/vidverse/api/v1/comments", commentRouter);
app.use("/vidverse/api/v1/playlist", playlistRouter);
app.use("/vidverse/api/v1/dashboard", dashboardRouter);
app.use("/vidverse/api/v1/healthcheck", healthcheckRouter);
app.use("/vidverse/api/v1/subscriptions", subscriptionRouter);

export { app };
