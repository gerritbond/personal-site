const ActionButton = ({href, text, download=false}: {href: string, text: string, download?: boolean}) => {
  return <a href={href} download={download} className="w-full lg:w-auto px-8 py-3 my-1 rounded-md bg-red-800 text-white hover:bg-red-900 text-center">{text}</a>
}

const Introduction = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 p-3 block lg:hidden">
        <img src="./rain_in_ghent.jpg" alt="Gerrit and Rebecca in Ghent, during a rainstorm." className="rounded-md" />
      </div>
      <div className="col-span-1 pt-10 text-md">
        <span className="text-2xl font-bold">Hey!</span>
        <br/><br/> 
        I'm <span className="font-bold text-red-800">Gerrit Bond</span>, a Software Engineer currently based in Baltimore, MD with my wife Rebecca. That's us in Ghent on a particularly rainy holiday! 
        <br/><br/>
        My background is primarily as a backend developer, focusing on distributed systems and microservices, though I've been dabbling more and more on the frontend, pushing my competencies across the stack. 
        <br/><br/>
        In recent years, I've been focusing on growing my managerial skills as an Engineering Manager, while still keeping my tech skills sharp in the off hours through hobby projects, and collaboration with various friends. Most recently, I've been working on an application to back our ongoing <a href="https://www.drivethrurpg.com/en/product/230009/stars-without-number-revised-edition-free-version/" target="_blank">Stars Without Numbers</a> campaign.
        <br/><br/>
        If you want to chat about opportunities, or discuss the latest going-ons in our home games please feel free to reach out!
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-16">
          <ActionButton href="mailto:gerritbond+sitecontact@gmail.com" text="Send Me a Note" />
          <ActionButton href="/gerritbond-resume-norefs-202410.pdf" download text="Get my Resume" />
        </div>
      </div>
      <div className="col-span-1 p-10 ml-10 hidden lg:block">
        <img src="./rain_in_ghent.jpg" alt="Gerrit and Rebecca in Ghent, during a rainstorm." className="rounded-md" />
      </div>
    </div>
}


export const AboutLayout = () => {
  return <div className="grid grid-cols-5">
    <div className="col-start-2 col-span-3 px-4">
      <Introduction />
    </div>
  </div>;
};

