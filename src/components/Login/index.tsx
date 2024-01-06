/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import SoTLogo from '../../../public/sot-logo.png'
import BrazilFlag from '../../../public/images/brazil-flag.png'
import USAFlag from '../../../public/images/usa-flag.png'
import LanguageButton from '../LanguageButton'
import { useTranslations } from 'next-intl'

const listItems = [
  {
    id: 1,
    name: 'communityItem',
  },
  {
    id: 2,
    name: 'watchItem',
  },
  {
    id: 3,
    name: 'storeItem',
  },
]

const Login = () => {
  const translate = useTranslations('Translate')

  return (
    <section className="flex h-screen w-full flex-col md:flex-row">
      <div className="flex-1 bg-white bg-paper-image bg-cover bg-center bg-no-repeat p-10">
        <div className="flex justify-between">
          <Image
            src={SoTLogo}
            alt="Picture of the author"
            width={120}
            height={120}
          />

          <div className="flex gap-3">
            <LanguageButton
              flag={USAFlag}
              alt="United States Flag"
              locale="en"
            />
            <LanguageButton flag={BrazilFlag} alt="Brazil Flag" locale="pt" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <h1 className="max-w-[280px] text-center text-4xl font-bold text-black md:max-w-full">
            {translate('title')}
          </h1>
          <h2 className="text-xl font-extrabold uppercase text-black">
            {translate('subtitle')}
          </h2>
        </div>

        <div className="mt-[60px] flex justify-center">
          <div className="flex w-full max-w-[475px] flex-col items-center gap-8">
            <button
              type="button"
              className="h-10 w-full rounded-md border border-solid border-black bg-white shadow shadow-black"
            >
              <span className="font-bold text-black">
                {translate('loginText')}
              </span>
            </button>

            <div className="flex items-center gap-5">
              <div className="h-[2px] w-20 bg-black"></div>
              <div className="font-bold text-black">{translate('orText')}</div>
              <div className="h-[2px] w-20 bg-black"></div>
            </div>

            <input
              type="text"
              placeholder={translate('placeholderInputText')}
              className="h-10 w-full rounded-md border border-solid border-black px-5 font-bold text-black shadow shadow-black outline-none placeholder:text-black"
            />

            <input
              type="text"
              placeholder={translate('placeholderInputPassword')}
              className="h-10 w-full rounded-md border border-solid border-black px-5 font-bold text-black shadow shadow-black outline-none placeholder:text-black"
            />

            <span className="cursor-pointer self-end font-bold text-blue-700">
              {translate('forgotPasswordText')}
            </span>

            <button
              type="button"
              className="h-10 w-full rounded-md border border-solid border-black bg-black text-white shadow shadow-black"
            >
              {translate('loginButtonText')}
            </button>

            <div className="flex gap-2">
              <span className="text-black">{translate('signUpMessage')}</span>
              <span className="cursor-pointer font-bold text-blue-700">
                {translate('signUpText')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[800px] flex-1 bg-blue-300 bg-galleon-image bg-cover bg-center bg-no-repeat p-10 md:h-full">
        <ul className="flex justify-end gap-5">
          {listItems.map((item) => (
            <li
              className="flex h-7 cursor-pointer items-center rounded-md border border-solid border-gray-600 px-3 font-bold tracking-widest text-[#c8cad0]"
              key={item.id}
            >
              {translate(item.name)}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex h-full max-h-[600px] flex-1 items-end">
          <div className="flex max-w-[550px] flex-col gap-2">
            <p className="text-2xl font-bold tracking-widest text-[#c4bebb]">
              {translate('phraseText')}
            </p>
            <p className="text-2xl font-bold tracking-widest text-[#c4bebb]">
              - Isak Dinesen
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
