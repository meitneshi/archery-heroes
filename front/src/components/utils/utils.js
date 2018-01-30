const defaultPortraitPath = 'static/img/default/athlete-default.jpg';
const defaultCoverPath = 'static/img/default/athlete-cover-default.jpg';

export const fillAthlete = (athlete: Object) => {
  if (athlete.image === '') {
    athlete.image = defaultPortraitPath;
  }
  if (athlete.cover === '') {
    athlete.cover = defaultCoverPath;
  }
};
