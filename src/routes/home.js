import express from 'express';
import cHome from '../controllers/cHome.js';

const home = express();

home.get("/", cHome.cHome);

export default home;
