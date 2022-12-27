import { GetStaticProps, GetServerSideProps, NextApiHandler } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../../components/header';
import IndexPage from '../..';

import { SignInAuthorizationParams } from 'next-auth/react';
let Tickets = ['44444', '423333', '423443'];

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <Header />
      <h1>Ticket: {id}</h1>
    </>
  );
}

let table = [
  { id: 1, key: 1 },
  { id: 2, key: '222', title: 'title' },
  { id: 3, key: '322', title: 'edsadas' },
];
