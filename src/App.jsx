
import Container from './components/Container/Container';
import user from './user.json';
import Profile from './components/Profile/Profile';
import data from './data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


export default function App() {
  return (
    <Container>
      <Profile  username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </Container>
  );
}


