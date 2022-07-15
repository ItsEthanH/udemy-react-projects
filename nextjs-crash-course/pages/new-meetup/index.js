import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function onAddMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log(response);
      alert('Sending data failed!');
      return;
    }

    const data = await response.json();

    console.log(data);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
