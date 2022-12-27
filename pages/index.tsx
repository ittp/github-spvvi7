import Header from '../components/header';
let table = [{ id: 1 }, { id: 2 }];
export default function IndexPage() {
  return (
    <>
      <Header />
      {table.map((item, key) => item.id)}
      <div className="container">Data</div>
    </>
  );
}
