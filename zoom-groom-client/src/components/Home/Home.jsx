import BackButton from "../BackButton/BackButton"
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
  return(
    <>
    <Navbar></Navbar>
      <BackButton></BackButton>
      <h1>Dog grooming made easy</h1>
      <p>Book your pet's next haircut with ease with our easy online booking system.</p>
      <a href="sign-up">Join Now</a>
      <img src="https://trello-attachments.s3.amazonaws.com/60f4b93dba3af94992f7c536/334x501/a00a8116e914fb80ad9a43c9cba84bd7/image.png" alt="Corgi with ribbon around its neck"></img>
     <Footer></Footer>
    </>
  )
}

export default Home