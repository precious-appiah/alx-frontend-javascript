import { createUser, uploadPhoto } from "./utils";

export default async function asyncUploadUser() {
  const photoRes = await uploadPhoto();
  const userRes = await createUser();
  if (photoRes == null || userRes == null) {
    return {
      photo: null,
      user: null,
    };
  } else {
    return {
      photo: photoRes,
      user: userRes,
    };
  }
}
