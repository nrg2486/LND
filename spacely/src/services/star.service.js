import db from "../firebase";
import { ref, get, remove, push, update} from "firebase/database";
const dbRef = ref(db, "/stars");

const getAllStars = () => {
  return get(dbRef);
};

const addStar = (name, discoveryDate, imageUrl, galaxy) => {
  return push(dbRef, {
    galaxy: galaxy,
    discoveryDate: discoveryDate,
    imageUrl: imageUrl,
    name: name
  });
};
const removeStar = (key) => {
  const dbRefStar = ref(db, `/stars/${key}`);
  return remove(dbRefStar);
};


const modifyStar = (key, updatedData) => {
  const dbRefStar = ref(db, `/stars/${key}`);
  return update(dbRefStar, updatedData);
};

// eslint-disable-next-line
export default { getAllStars, addStar, removeStar, modifyStar };
