function Footer() {
  return (
    <footer className='flex justify-center p-6 bg-neutral text-neutral-content mt-auto'>
      <div className='footer lg:w-4/5 flex'>
        <div className='opacity-75 flex flex-col sm:flex-row gap-3'>
          <p>Social Media App 2022</p>
          <p>(By Tomasz Witkowski)</p>
          <p>
            <a
              href='https://tomaszwitkowski.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='font-semibold'
            >
              My portfolio
            </a>
          </p>
        </div>
        <div className='gap-3 ml-auto opacity-75 flex flex-col sm:flex-row'>
          <p>Some footer stuff</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
