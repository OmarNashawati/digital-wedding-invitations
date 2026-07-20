export const getTemplates = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get Templates',
  });
};

export const getTemplate = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get Template',
  });
};
