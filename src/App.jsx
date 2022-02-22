import PaintingList from './components/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';
import paintings from './paintings.json';
import colorPickerOptions from './colorPickerOptions.json';
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
      {<Alert text="Шеф все пропало!" type="success" />}
        {<Alert text="Шеф все пропало!" type="warning" />}
      {<Alert text="Шеф все пропало!" type="error" />}
      <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
      <ColorPicker options={colorPickerOptions} />
      <PaintingList items={paintings} />
      <Profile  username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* <Statistics options={data} /> */}
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </Container>
  );
}


