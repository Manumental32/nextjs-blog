import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Avatar({name}) {
  return (
    <Image
      priority
      src="https://avatars.githubusercontent.com/u/4459797?v=4"
      className={utilStyles.borderCircle}
      height={144}
      width={144}
      alt={name}
    />
  )
}
