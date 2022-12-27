import Header from '../components/header';
import { PageHeader } from 'antd';
export default function AboutPage() {
  return (
    <>
      <Header />
      <h1>Ticket management</h1>

      <div>
        <div className="container">
          <PageHeader />
        </div>
      </div>
    </>
  );
}
