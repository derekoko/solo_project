const convertToPhotoUrl = (name) => {
  return `images/${name.toLowerCase().replace(/\s/gi, '-')}.jpg`;
};

module.exports = {
  convertToPhotoUrl,
};
