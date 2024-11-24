import "./index.css"
import cx from "classnames"

import { ComponentProps } from "react"

import { LinkedinIcon } from "@/components/atoms/LinkedinIcon"
import { GithubIcon } from "@/components/atoms/GithubIcon"
import { Avatar } from "@/components/atoms/Avatar"
import { PROFILE } from "@/utils/profile"
import { useMetamask } from "@/hooks/useMetamask"
import { Skeleton } from "@/components/atoms/Skeleton"


export type AboutSectionProps = ComponentProps<'section'>

export function AboutSection({ className, ...rest }: AboutSectionProps) {
  const { isPending, connect, connected, data } = useMetamask()

  const styleWrapper = cx('aboutMe', className)

  const SOCIAL_MEDIAS = [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/rambog/',
      icon: <LinkedinIcon className="icon" />
    },
    {
      title: 'GitHub',
      href: 'https://github.com/RamboGj',
      icon: <GithubIcon className="icon" />
    },
  ]

  return (
    <section id='aboutMe' className={styleWrapper} {...rest}>
      <Avatar />

      <h1 className='title'>{PROFILE.NAME}</h1>

      <p className='paragraph'>{PROFILE.ABOUT}</p>

      <ul className='socialMedias'>
        {SOCIAL_MEDIAS.map(({ href, icon, title }) => {
          return (
            <li key={title}>
              <a target='_blank' href={href}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>

      {isPending ? (
        <>
          <Skeleton width={112} height={35} borderRadius={8} />
        </>
      ) : (
        <>
          <button 
            onClick={() => {
              if (!connected) connect()
            }} 
            className='actionButton'
          >
            {connected ? `Connected: ${data?.address.slice(0, 12) + "..."}` : 'Connect'}
          </button>
        </>
      )}

    </section>
  )
}