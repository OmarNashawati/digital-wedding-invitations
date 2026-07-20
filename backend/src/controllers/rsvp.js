export const submitRSVP = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'submit RSVP',
  });
};

export const getRSVP = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get RSVP',
  });
};
