import React from "react";

const SidebarProfile = () => {
  return (
    <div className="bg-white shadow-md p-4 w-100%">
      <div className="flex items-center space-x-4">
        <img        
          className="w-16 h-16 rounded-full object-cover"
          src="https://picsum.photos/200"
          alt="Profile"
        />
        <div>
          <h1 className="text-lg font-medium">John Doe</h1>
          <p className="text-gray-500 text-sm">UI Designer</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h2 className="text-lg font-medium mb-2">About Me</h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          blandit nisl. Donec pharetra vestibulum diam id cursus.
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h2 className="text-lg font-medium mb-2">Contact Me</h2>
        <p className="text-gray-500 text-sm">
          Email: johndoe@example.com
        </p>
        <p className="text-gray-500 text-sm">Phone: +1-123-456-7890</p>
      </div>     
    </div>
  );
};

export default SidebarProfile;
