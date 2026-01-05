import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';

function Home() {
  usePageMeta({
    title: 'Kay Digital Studio – Interior & IT Solutions',
  });

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Ke Profile</Link>
    </div>
  );
}

export default Home;
