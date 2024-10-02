function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve('success');
      else {
        reject('failure');
      }
    }, 2000);
  });
}

module.exports = getResponseFromAPI;
