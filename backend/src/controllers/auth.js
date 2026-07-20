export const login = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'login',
  });
};

export const register = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'register',
  });
};

export const logout = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'logout',
  });
};
