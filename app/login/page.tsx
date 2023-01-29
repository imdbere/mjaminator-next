import Image from 'next/image'
import { Epilogue, Sarabun } from '@next/font/google'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import TextInput from '@/components/TextInput/TextInput'

const epilogue = Epilogue({ subsets: ['latin'] })
const sarabun = Sarabun({ subsets: ['latin'], weight: "300" })

export default function Home() {
  return (
    <main>
      <img className={styles.bg} src="/login_bg.jpg" alt="BG"></img>
      <div className={styles.login}>
        <h1 className={epilogue.className}>Welcome</h1>
        <h3 className={sarabun.className}>Sign in with Email or Socials</h3>

        <div className={styles.inputs}>
          <TextInput name="Email"></TextInput>
          <TextInput name="Password"></TextInput>
        </div>

        <Button>Login of Register</Button>

        <div className={styles.socialLogins}>
          <p className={epilogue.className}>Or continue with</p>
          <img src="/google.png" alt="" />
        </div>
      </div>
    </main>
  )
}
