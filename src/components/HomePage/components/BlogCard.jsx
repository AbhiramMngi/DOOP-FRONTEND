import React from 'react';
import DeleteImage from '../images/del.svg';
import EditImage from '../images/edit.svg';
const BlogCard = ({ title, content, userName }) => {
  const onClickEdit = () => {};
  const onClickDelete = () => {};
  const titleString = title ?? 'Supercharged !';
  const userNameString = userName ?? 'Jean Jacques';
  const contentString =
    content ??
    'The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...';

  return (
    <>
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <a href="www.google.com" className="block w-full h-full">
          <img
            alt="blog photo"
            src={require('../images/bich.jpeg')}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-medium text-indigo-500 text-md">Blog</p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              {titleString}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              {contentString}
            </p>
            <div className="flex items-center mt-4">
              <a href="www.youtube.com" className="relative block">
                <img
                  alt="profil"
                  src={require('../images/empty_image.png')}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-row justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">
                  {userNameString}
                </p>
                <div className="flex flex-row ml-20 justify-evenly">
                  <button onClick={onClickEdit} className="mr-4">
                    <img src={EditImage} height={20} width={20}></img>
                  </button>
                  <button onClick={onClickDelete}>
                    <img src={DeleteImage} height={20} width={20}></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default BlogCard;
