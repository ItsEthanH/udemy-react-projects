import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>Meetup - {props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </>
  );
}

// get the dynamic path names for use in getStaticProps()
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://itsethanh:LhFuCFf8jyrE4r1f@nextjs-test.xlndnfx.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupIds.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

// allows the pre-rendering of a page using fetched data
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    'mongodb+srv://itsethanh:LhFuCFf8jyrE4r1f@nextjs-test.xlndnfx.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
