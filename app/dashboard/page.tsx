import Image from 'next/image'
import { Epilogue, Sarabun } from '@next/font/google'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import TextInput from '@/components/TextInput/TextInput'
import { Search, Heart } from 'lucide-react'

const epilogue = Epilogue({ subsets: ['latin'] })
const sarabun = Sarabun({ subsets: ['latin'], weight: "300" })

export default function Home() {
	return (
		<>
			<main>
				<div className={styles.scroll}>
					<div className={styles.header}>
						<div className={styles.headerTop}>
							<div className={styles.headerSearch}>
								<Search size={24} />
								<h4 className={epilogue.className}>Restaurants</h4>
							</div>
							<select className={styles.dropdown} name="place" id="place">
								<option value="eng">Engerthstraße 108</option>
							</select>
						</div>

						<TextInput name="Search" showText={false}></TextInput>
					</div>
					<div className={styles.content}>
						{[1, 2, 3, 4, 5].map(a => <div className={styles.results}>
							<div className={styles.card}>
								<img className={styles.cardImg} src="/next.svg" alt="" />
								<div className={styles.cardContent}>
									<div className={styles.line}>
										<p className={epilogue.className}>Le Burger</p>
										<Heart />
									</div>
									<div className={styles.line}>
										<p className={epilogue.className}>Currently unavailable</p>
										<Button>Notify</Button>
									</div>
								</div>
							</div>
						</div>)}
						<Button className={styles.moreBtn}>See more</Button>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.footerItem}>
						<Search />
						<p className={epilogue.className}>Search</p>
					</div>
					<div className={styles.footerItem}>
						<Search />
						<p className={epilogue.className}>Search</p>
					</div>
				</div>
			</main>
		</>
	)
}
