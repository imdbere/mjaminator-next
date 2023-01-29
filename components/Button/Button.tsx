'use client';

import clsx from 'clsx';
import styles from './Button.module.css'

export default function Button({children, className = ""}: {children: string, className?: string}) {
    return (
        <button onClick={() => alert("Test")} className={clsx([styles.button, className])}>{children}</button>
    )
}