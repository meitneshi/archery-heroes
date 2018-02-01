import express, { Router } from 'express';
import { findAllAthlete, findOneAthlete } from './controllers/athlete';
import { findOneCountry, findAllCountries } from './controllers/country';

const router = Router();

// Test Ping
router.route('/ping')
  .get(function(req, res) {
      res.json("Pong !");
  })

// === Athletes Routes
// Find All (GET)
router.route('/athletes').get(findAllAthlete);
// Find one (GET)
router.route('/athletes/:id').get(findOneAthlete);

// === Country Routes
// FIND All (GET)
router.route('/countries').get(findAllCountries);
// Find one (GET)
router.route('/countries/:id').get(findOneCountry);

export default router;
