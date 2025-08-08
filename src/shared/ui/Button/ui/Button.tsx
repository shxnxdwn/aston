import styles from './Button.module.css';
import type {ButtonHTMLAttributes, ReactNode} from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string
}


const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {

  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};


export default Button;
