export const privatePage = (req, res, next) => {
  //if (!req.session?.user?.id) {
  if (!req.user?.id) {
    return res.status(301).redirect('/login');
  } else {
    next();
  }
};

export const privateApi = (req, res, next) => {
  //if (!req.session?.user?.id) {
  if (!req.user?.id) {
    return res.status('401').json({ error: 'User not logged in' });
  } else {
    next();
  }
};

export const redirectToDashboard = (req, res, next) => {
  //if (req.session?.user?.id) {
  if (req.user?.id) {
    return res.status(301).redirect('/dashboard');
  }
  next();
};
