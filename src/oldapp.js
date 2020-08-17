// useState
const [todos, setTodos] = useState([]);
const [inputValue, setInput] = useState("");

useEffect(() => {
  db.collection("todos")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
}, []);

const handleClick = (e) => {
  e.preventDefault();
  if (e.target.value !== "") {
    // add todos to fb
    db.collection("todos").add({
      todo: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, inputValue]);
    setInput("");
  } else {
    console.log("please enter a todo");
  }
};

const handleChange = (e) => {
  setInput(e.target.value);
};

// Delete functionality
import { db } from "../firebase/firebaseConfig";

<IconButton
  aria-label="delete"
  onClick={(e) => db.collection("todos").doc(idx).delete()}
>
  <DeleteForeverIcon />
</IconButton>;
