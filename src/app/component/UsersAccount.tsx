import Suggestion from './Suggestion';

const UsersAccount = () => {
  const userImg =
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <div>
      <div className="flex justify-between items-center mx-4 mt-4">
        <div className="flex items-center">
          <img
            src={userImg}
            className="h-14 rounded-full object-cover border mr-3"
          />
          <p className="font-medium">
            Boki.Yugee1116
            <br />
            <span className="text-gray-400 font-thin">
              Welcome to instagram
            </span>
          </p>
        </div>

        <button className="text-blue-500 font-semibold">Sign Out</button>
      </div>
      {/* Suggestion Ig users */}

      <Suggestion />
    </div>
  );
};

export default UsersAccount;
