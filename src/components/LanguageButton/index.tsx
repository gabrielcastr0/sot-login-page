import Image, { StaticImageData } from 'next/image'
import { Link } from '@/navigation'

type LanguageButtonProps = {
  flag: StaticImageData
  alt: string
  locale: string
}

const LanguageButton = ({ flag, alt, locale }: LanguageButtonProps) => {
  return (
    <Link href="/" locale={locale as 'en' | 'pt'}>
      <button
        type="button"
        className="flex h-7 items-center rounded-md border border-solid border-black px-1"
      >
        <Image width={32} height={32} alt={alt} src={flag} />
      </button>
    </Link>
  )
}

export default LanguageButton
