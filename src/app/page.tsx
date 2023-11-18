import { Metadata } from 'next';
import HomePage from './_component/HomePage';

export const metadata: Metadata = {
  title: 'Home | OpenBC',
  description: 'Be a Force for Good in BC!',
};

export default function Home() {
  return <HomePage />;
}
