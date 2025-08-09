import styles from './LayoutHeader.module.css';
import {useCallback, useState} from "react";
import ThemeSwitcher from '../../../features/ThemeSwitcher';
import Button from '../../../shared/ui/Button';
import Modal from '../../../shared/ui/Modal';


const LayoutHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);


  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>Aston App</a>
          <div className={styles.controls}>
            <nav className={styles.nav}>
              <a href="#">Главная</a>
            </nav>
            <Button variant="ghost" onClick={openModal}>О проекте</Button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.aboutModalContent}>
          <h2>О проекте</h2>
          <p>Учебное приложение для обучения на курсе Aston. Создано на TS + React + Vite</p>
          <Button
            variant="primary"
            onClick={closeModal}
            className={styles.modalButton}
          >
            ОК
          </Button>
        </div>
      </Modal>
    </>
  );
};


export default LayoutHeader;
