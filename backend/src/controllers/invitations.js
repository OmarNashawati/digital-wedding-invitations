export const getInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get Invitation',
  });
};

export const getPublicInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get Public Invitation',
  });
};

export const getInvitationPage = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'get Invitation Page',
  });
};

export const updateInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'update Invitation',
  });
};

export const createInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'create Invitation',
  });
};

export const deleteInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'delete Invitation',
  });
};

export const publishInvitation = async (req, res) => {
  res.status(200).json({
    success: true,
    data: 'publish Invitation',
  });
};
