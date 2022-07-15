import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const router = useRouter();

  if (req.method === 'POST') {
    const client = await MongoClient.connect(
      'mongodb+srv://itsethanh:LhFuCFf8jyrE4r1f@nextjs-test.xlndnfx.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(req.body);

    console.log(result);

    client.close();

    res.status(201).json({
      message: 'Meetup Inserted',
    });

    router.push('/');
  }
}

export default handler;
