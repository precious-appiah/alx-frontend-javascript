// import getResponseFromAPI from "./0-promise.js";
// import getFullResponseFromAPI from "./1-promise"

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

// 100
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();