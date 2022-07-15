import { useRouter } from 'next/router';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.title}
      image={props.image}
      description={props.description}
      address={props.address}
    />
  );
}

// get the dynamic path names for use in getStaticProps()
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm1',
        },
      },
    ],
  };
}

// allows the pre-rendering of a page using fetched data
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup, using meetupId

  return {
    props: {
      title: 'A First Meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Buildings-1804479_1920.jpg/1024px-Buildings-1804479_1920.jpg',
      description: 'A first meetup',
      address: 'Some St, Number 5, City, State, PO57 CO53',
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
