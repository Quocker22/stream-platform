import { FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa'

const socialList = [
  { component: FaFacebookF, href: '1' },
  { component: FaYoutube, href: '2' },
  { component: FaTiktok, href: '3' },
]

const Socials = (): JSX.Element => {
  return (
    <>
      {socialList.map((s) => (
        <a
          className='inline-flex items-center rounded-lg p-2 text-sm font-medium text-secondary-500 hover:bg-secondary-200'
          href={s.href}
          key={s.href}
          rel='noopener'
          target='_blank'
        >
          <s.component className='size-4' />
        </a>
      ))}
    </>
  )
}

export { Socials }
