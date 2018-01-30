import Athletes from '../models/athlete';

export const findAllAthlete = (req, res) => {
  Athletes.find().lean().exec((err, athletesList) => res.json(athletesList))
};

export const findOneAthlete = (req, res) => {
  Athletes.findOne({ id: req.params.id }, function(err, athlete) {
      if(err) {
        res.send(err);
      }
      res.json(athlete);
    });
}
