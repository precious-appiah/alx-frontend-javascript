import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoRes = await uploadPhoto();
    const userRes = await createUser();
    if (photoRes == null || userRes == null) {
      return {
        photo: null,
        user: null,
      };
    }
    return {
      photo: photoRes,
      user: userRes,
    };
  } catch (error) {
    console.log(error);
    return error.message || error;
  }
}
