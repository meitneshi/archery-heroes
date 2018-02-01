import Countries from '../models/country';

export const findOneCountry = (req, res) => {
  Countries.findOne({ code: req.params.id }, function(err, country) {
      if(err) {
          res.send(err);
      }
      res.json(country);
  })
};

export const findAllCountries = (req, res) => {
  Countries.find().lean().exec((err, countriesList) => res.json(countriesList));
};
