import Marat from '../imgs/Marat.jpg';
import Yulia from '../imgs/Yulia.jpg';

// Это типо как то из Redux:
const state = {
  dialogs: [
    { id: "1", message: "Hello, how are you?" },
    { id: "2", message: "Hi! Good, what about you?" },
    { id: "1", message: "Not bad.. Do you go to street  with me?" },
    { id: "2", message: "Of Course!" },
    { id: "2", message: "I`m really want go to with you...!" },
  ],

  contacts: [
    { img: Marat, id: "1", name: "Marat" },
    { img: Yulia, id: "2", name: "Ylia" },
  ],

  profile: [{ name: "Marat", surname: "Bashirov", id: "1" }],
};
// Конец Redux

export default state;
