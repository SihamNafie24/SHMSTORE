import React from 'react';
import styles from './CookieMessage.module.css';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';

function CookieMessage() {
  const [cookie, setCookie] = React.useState(null)
  const [ativo, setAtivo] = React.useState(true)

  React.useEffect(() => {
    const escolhaCookie = window.localStorage.getItem('cookie')
    if (escolhaCookie) {
      setAtivo(false)
    }
  }, [])

  function handleClick ({target}) {
    setCookie(target.innerText)
    window.localStorage.setItem('cookie', target.innerText)
    setAtivo(false)
  }

  if (!ativo) return null
  return (
    <aside className={`${styles.container} comeFromBottom`}>
      <div className={styles.content}>
        <p>
          By clicking "Accept all cookies", you agree to the storage of cookies on your device.
        </p>
        <div className={styles.btnsContainer}>
          <ButtonPrimary onClick={handleClick} text="Accept" />
          <ButtonSecondary onClick={handleClick} text="Reject" />
        </div>
      </div>
    </aside>
  );
}

export default React.memo(CookieMessage)
