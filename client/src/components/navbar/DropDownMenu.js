import { HiOutlineLogout } from 'react-icons/hi';
import { AiOutlineCompass } from 'react-icons/ai';
// import useOnclickOutside from 'react-cool-onclickoutside';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const serviceDropdown = [
  {
    name: 'Update Profile',
    path: '/user/update-profile',
    icon: <AiOutlineCompass />,
  },
  { name: 'Log Out', path: '/', icon: <HiOutlineLogout /> },
];

// const defaultClass =
//   'border-b px-5  flex gap-10 hover:bg-palette-orange hover:cursor-pointer py-2 text-2xl items-center';
// const topClass = defaultClass + ' rounded-t-[10px]';
// const bottomClass = defaultClass + ' rounded-b-[10px]';

const Dropdown = ({ setShowDropDown }) => {
  const { logOut } = useAuth();

  // const dropDownref = useOnclickOutside(() => {
  //   setShowDropDown(false);
  // });

  return (
    <div>
      <div
        // ref={dropDownref}
        // onMouseLeave={() => setShowDropDown(false)}
        className='dropdown'
        // 'hidden md:block mt-24 w-full rounded-[5px] shadow-md'
      >
        <ul className='dropropDownItem'>
          {/* w-64 absolute bg-[#c4915f] -right-[50%] rounded-[10px] mr-[5px]
          mt-[5px] pt-0 */}
          {serviceDropdown.map((menuItem, i) => {
            return (
              <div key={i}>
                {i === 0 && (
                  <Link
                    className='topItem'
                    to={menuItem.path}
                    style={{color: 'inherit'}}
                  >
                    <p>{menuItem.name}</p>
                  </Link>
                )}
                {i === serviceDropdown.length - 1 && (
                  <div
                    className='bottomItem'
                    onClick={() => {
                      logOut();
                    }}
                  >
                    <p>{menuItem.name}</p>
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      {/* Mobile */}
    </div>
  );
};

export default Dropdown;

