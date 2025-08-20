import type { ReactNode } from 'react';

type ModalBodyProps = {
  children: ReactNode;
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div>{children}</div>;
};

export default ModalBody;
