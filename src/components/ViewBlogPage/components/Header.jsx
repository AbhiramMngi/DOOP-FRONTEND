import { Link } from 'react-router-dom';
import { FiEdit, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-gray-800">
              My Blog
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/edit" className="text-gray-800 mx-4">
              <FiEdit className="inline-block mr-2" />
              Write
            </Link>
            <Link to="/profile" className="text-gray-800">
              <FiUser className="inline-block mr-2" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
