import express from "express";

const urlEncoderMiddleware = express.urlencoded({ extended: true });

export default urlEncoderMiddleware;
