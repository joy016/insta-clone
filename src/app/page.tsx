import Feed from './component/Feed';

export default function Home() {
  return (
    <div className="flex px-4 sm:px-36 pt-8 space-x-4">
      <section className="w-full sm:w-2/3">
        <Feed />
      </section>
      <section className="bg-amber-100 w-1/3 hidden sm:block">Accounts</section>
    </div>
  );
}
