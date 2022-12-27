import Link from 'next/link';
import axios from 'axios';
interface Props {
  data: any;
}

let loader = axios.create({
  baseURL: '${url}',
  headers: {},
  auth: {
    username: '${username}',
    password: '${password}',
  },
  withCredentials: true,
  // formSerializer:
  // transformRequest:
});
export default function Page(Props: []) {
  let { data } = Props;

  if (data) {
    console.log(data);
  } else {
    console.log('no data');
  }

  return <div>Page</div>;
}
