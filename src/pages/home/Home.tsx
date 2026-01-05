import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/profile">Ke Profile</Link>
    </>
  );
}

export default Home;
