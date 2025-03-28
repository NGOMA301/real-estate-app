import express from "express";
import { getPartners, sendEmail, uploadLogo, uploadPartnerLogo } from "../controlers/otherCont.js";




export const otherRoute = express.Router();

otherRoute.post("/enquiry/send", sendEmail)
otherRoute.post("/upload", uploadLogo, uploadPartnerLogo);
otherRoute.get("/partners/all", getPartners);
