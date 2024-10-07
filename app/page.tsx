import Link from "next/link";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Contact App</h1>
      <Link
        href="/contact"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Home;
