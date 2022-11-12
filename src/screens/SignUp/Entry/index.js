import React, { useState } from 'react'
import cn from 'classnames'
import styles from './Entry.module.sass'
import TextInput from '../../../components/TextInput'
import Image from '../../../components/Image'

const Entry = ({ onConfirm }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const [isSubmitting, setIsSubmitting] = useState(false)

	return (
		<div className={styles.entry}>
			<div className={styles.head}>
				<div className={styles.info}>Sign up with Open account</div>
				<div className={styles.btns}>
					<button className={cn('button-stroke', styles.button)}>
						<img src='/images/content/google.svg' alt='Google' />
						Google
					</button>
					<button className={cn('button-stroke', styles.button)}>
						<Image
							className={styles.pic}
							src='/images/content/apple-dark.svg'
							srcDark='/images/content/apple-light.svg'
							alt='Apple'
						/>
						Apple ID
					</button>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.info}>Or continue with email address</div>
				<TextInput
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={styles.field}
					name='email'
					type='email'
					placeholder='Your Email'
					required
					icon='mail'
				/>
        				<TextInput
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className={styles.field}
					name='password'
					type='password'
					placeholder='Your Password'
					required
					icon='check'
				/>
				<button className={cn('button', styles.button)} onClick={async e => {
          e.preventDefault()
          // your register logic here
          // console.log(email, password)
          if (!email || !password) {
            // alert('Invalid Email/Password')
          }
        }}>
					Register
				</button>
				<div className={styles.note}>
					This site is protected by reCAPTCHA and the Google Privacy Policy.
				</div>
			</div>
		</div>
	)
}

export default Entry
