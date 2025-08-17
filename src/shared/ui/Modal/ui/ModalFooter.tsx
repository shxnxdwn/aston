import type { ReactNode } from 'react';

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <footer className={className}>{children}</footer>;
};

export default ModalFooter;
