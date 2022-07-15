import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function onAddMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
