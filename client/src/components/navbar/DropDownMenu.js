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


const Dropdown = ({ setShowDropDown }) => {
  const { logOut } = useAuth();


  return (
    <div>
      <div
        className='dropdown'
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

