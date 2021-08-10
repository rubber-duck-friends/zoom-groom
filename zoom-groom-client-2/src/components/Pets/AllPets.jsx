import getPetByUser from "../../config/getPetByUser";

const AllPets = ({ user, setPet }) => {
  const userPets = getPetByUser(user.id);

  console.log(typeof(userPets))

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
      <button></button>
    </>
  );
};

export default AllPets;
