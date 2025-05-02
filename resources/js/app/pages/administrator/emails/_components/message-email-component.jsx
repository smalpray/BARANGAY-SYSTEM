import React, { useState } from 'react';
import {
    StarIcon,
    BookmarkIcon,
    ArchiveBoxIcon,
    TrashIcon,
    EnvelopeIcon,
    ClockIcon,
    ArchiveBoxXMarkIcon
  } from '@heroicons/react/24/outline';
  
  import {
    StarIcon as StarSolid,
    BookmarkIcon as BookmarkSolid,
    MagnifyingGlassIcon
  } from '@heroicons/react/24/solid';
  

const MessageEmailComponent = ({
  sender,
  subject,
  preview,
  time,
  starred = false,
  important = false,
  unread = false,
  checked = false,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="flex items-center border-y hover:bg-gray-200 px-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        type="checkbox"
        className="focus:ring-0 border-2 border-gray-400"
        defaultChecked={checked}
      />
      <div className="w-full flex items-center justify-between p-1 my-1 cursor-pointer">
        <div className="flex items-center">
          <div className="flex items-center mr-4 ml-1 space-x-1">
            <button title={starred ? "Starred" : "Not starred"}>
              {starred ? (
                <StarSolid className="text-yellow-500 hover:text-yellow-600 h-5 w-5" />
              ) : (
                <StarIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" />
              )}
            </button>
            <button title={important ? "Email is marked as important" : "Click to mark this email as important"}>
              {important ? (
                <BookmarkSolid className="text-yellow-500 hover:text-yellow-600 h-5 w-5" />
              ) : (
                <BookmarkIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" />
              )}
            </button>
          </div>
          <span className={`w-52 pr-2 truncate ${unread ? 'font-bold' : ''}`}>{sender}</span>
          <span className={`w-60 truncate ${unread ? 'font-bold' : ''}`}>{subject}</span>
          <span className="mx-1">-</span>
          <span className="w-72 text-gray-600 text-sm truncate">{preview}</span>
        </div>
        <div className="w-32 flex items-center justify-end">
          {hover ? (
            <div className="flex items-center space-x-2">
              <button title="Archive"><ArchiveBoxXMarkIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" /></button>
              <button title="Delete"><TrashIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" /></button>
              <button title={unread ? "Mark As Read" : "Mark As Unread"}>
                <MagnifyingGlassIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" />
              </button>
              <button title="Snooze"><ClockIcon className="text-gray-500 hover:text-gray-900 h-5 w-5" /></button>
            </div>
          ) : (
            <span className={`text-sm ${unread ? 'font-bold' : 'text-gray-500'}`}>{time}</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default MessageEmailComponent;
