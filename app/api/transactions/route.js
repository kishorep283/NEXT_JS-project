// app/api/transactions/route.js
import clientPromise from '../../../lib/db';
import { ObjectId } from 'mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('finance');
  const transactions = await db.collection('transactions').find({}).toArray();
  return new Response(JSON.stringify(transactions), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db('finance');
  const { amount, date, description, category } = await request.json();
  const newTransaction = { amount, date, description, category };
  await db.collection('transactions').insertOne(newTransaction);
  return new Response(JSON.stringify(newTransaction), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  const client = await clientPromise;
  const db = client.db('finance');
  const { id } = await request.json();
  await db.collection('transactions').deleteOne({ _id: new ObjectId(id) });
  return new Response(JSON.stringify({ message: 'Transaction deleted' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}