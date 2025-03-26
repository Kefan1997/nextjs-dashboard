// import { fetchRevenue } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Customers() {
  // const revenue = await fetchRevenue();

  return <p>Customers Page</p>;
}
