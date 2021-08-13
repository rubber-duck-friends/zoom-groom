import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getPetByUser from "../../config/getPetByUser";

const AllPets = ({ user, setPet }) => {
  const [userPets, setUserPets] = useState([])
  
  
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
          <li>
            <Link to="/pet" onClick={setPet(id)} key={id}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/pet/new">Add Pet</Link>
    </>
  );
};

export default AllPets;
