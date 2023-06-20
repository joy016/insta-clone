import Feed from './component/Feed';
import UsersAccount from './component/UsersAccount';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto gap-4">
      <section className="col-span-2">
        <Feed />
      </section>
      <section className="col-span-1 hidden md:inline-grid ">
        <UsersAccount />
      </section>
    </div>
  );
}
