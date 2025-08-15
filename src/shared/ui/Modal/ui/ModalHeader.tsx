import type {ReactNode} from 'react';


type ModalHeaderProps = {
  children: ReactNode
};


const ModalHeader = ({children} : ModalHeaderProps) => {
  return (
    <header>
      {children}
    </header>
  );
};


export default ModalHeader;
