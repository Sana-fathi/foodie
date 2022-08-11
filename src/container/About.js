import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="container" data-parallax="scroll" data-image-src="">
            <div className="bg-amber-400">
                <div className="container">
                    <div className="flex flex-row">
                        <div className="text-center bg-gradient-to-tr from-slate-100 to-gray-300 rounded-md m-5">
                            <h2 className='text-3xl'>About us</h2>
<p className='px-2'>For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!</p>
<a href="/about"><button className="bg-stone-200 px-3 mb-2 rounded-full">Learn more</button></a>                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;