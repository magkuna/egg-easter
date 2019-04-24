import React from 'react'

import EggPainted from '../egg-painted.svg'

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

const Painted = (props) => (
    <div
        style={styles.container}>
        <h1
            style={styles.text}
        >
            Wesołych Świąt</h1>
        <img
            src={EggPainted}
            alt={'Pomalowane'}
            style={styles.egg}
        />

    </div>
)

export default Painted