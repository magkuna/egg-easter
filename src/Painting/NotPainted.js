import React from 'react'

import EggNotPainted from '../egg.svg'

const styles = {
  text: {
    textAlign: 'center',
  },
  egg: {
    width: '250px',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  }
}

const NotPainted = (props) => (
  <div
    style={styles.container}
  >
    <h1
      style={styles.text}
    >
      Kliknij by pomalować jajko
        </h1>

    <img
      src={EggNotPainted}
      alt={'Niepomalowane'}
      style={styles.egg}
    />
  </div>
)

export default NotPainted







