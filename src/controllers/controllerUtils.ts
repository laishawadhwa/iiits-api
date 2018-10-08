const onlyPost = async (req, res) => {
  res.json({ message: 'POST requests only!!!' });
};

export { onlyPost };