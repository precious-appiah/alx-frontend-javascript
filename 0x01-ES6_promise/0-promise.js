function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve('success');
      else {
        reject(new Error('failure'));
      }
    }, 2000);
  });
}

module.exports = getResponseFromAPI;
