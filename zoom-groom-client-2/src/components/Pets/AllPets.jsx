import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import getPetByUser from "../../config/getPetByUser";

const AllPets = ({ user, setPet }) => {
  const [userPets, setUserPets] = useState([])
  const history = useHistory();
  
  
  // if(!user) return null
  useEffect(() => {
    getPetByUser(user.id).then(pets => setUserPets(pets))
  }, [user]);


  return (
    <>
      <h1>
        {user.firstName} Pet{userPets.length > 1 && "'s"}
      </h1>
      <p>Click a pet to view pet details</p>

      <ul>
        {userPets && userPets.map(({ id, name }) => (
          <li onClick={setPet(id)} key={id}>
            {name}
          </li>
        ))}
      </ul>
      <button>Add Pet</button>
    </>
  );
};

export default AllPets;
