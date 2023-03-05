import React, { useState } from 'react';

import styles from './styles.module.scss';

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownMenuProps = {
  buttonText: string;
  items: DropdownItem[];
  onItemClick: (value: string) => void;
};

const DropdownMenu = ({
  buttonText,
  items,
  onItemClick,
}: DropdownMenuProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (): void => {
    console.log('yes');
    setIsOpen(true);
  };

  const handleMouseLeave = (): void => {
    console.log('not');
    setIsOpen(false);
  };

  const handleItemClick = (value: string): void => {
    onItemClick(value);
    setIsOpen(false);
  };

  return (
    <li className={styles.dropdown}>
      <div
        className={styles.dropdownButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
        <div className={`${styles.dropdownMenu} ${isOpen && styles.show}`}>
          {/* <div className={`${styles.dropdownMenu} ${styles.show}`}> */}
          <ul>
            {items.map(item => (
              <li
                role="presentation"
                key={item.label}
                className={styles.dropdownItem}
                onClick={() => handleItemClick(item.value)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default DropdownMenu;