import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.text}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;
