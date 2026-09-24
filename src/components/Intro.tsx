import profileImage from '../assets/AdithVasuLinkedinProfile.jpg'

const Intro = () => {
  return (
    <section id="home" className="flex scroll-mt-20 items-center py-10">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-emerald-900 sm:text-7xl">
            Hi, I'm Adithya Vasudevan
          </h1>
          <p className="mt-6 text-lg font-medium text-emerald-800">
            Aspiring Software Engineer / Data Engineer
          </p>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <img
            className="h-64 w-64 rounded-2xl object-cover shadow-lg ring-4 ring-emerald-100 sm:h-80 sm:w-80"
            src={profileImage}
            alt="Adithya Vasudevan"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro;