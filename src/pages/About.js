import "./about.css";

function About() {
  document.title = "About - Jonas Khoza";
  return (
    <main className="home_main2">
      <h1>My quick story</h1>
      <h2>Full-stack web developer</h2>
      <section className="first-section">
        <p>
          Coming from a community where there's no library with computers, it
          has always been hard for me to harness and substantiate my love for
          technology as a whole. <br />I managed to get access to computer
          resources a bit late in my age. Since then I have always connected my
          inquisitive mind, my abilities to work with maths, my desire to keep
          learning and my love for technology to propel myself forward. After I
          matriculated in 2020, due to personal matters I couldn't apply to any
          university for 2021. <br />
          Fortunately my first computer came to my hands later that year. With
          that I ventured into teaching myself how to program on the web while
          awaiting my ID from the Home Affairs. I made use of free platforms
          like
          <span className="learning-platforms">
            SoloLearn, W3Schools, YouTube, javascript.io
            <span style={{ fontWeight: "400", paddingLeft: "6px" }}>and</span> a
            full-stack web-dev course from Academind.com
          </span>
          bought by a friend. The rest is history.
        </p>
      </section>
      <section className="second-section">
        <p>
          Working under-pressure isn't a natural ability for me, I had to learn
          how to cope under-pressure, leading a group of very energetic high
          school students gave me all the lessons. I pay close attention to
          detail and always want to know the why. I love to break the problem
          into pieces, analyse it and derive a potential solution that best fit
          it. I am a go-getter. I credit it all to my maths teacher who made me
          fall in love with solving maths problems
        </p>
      </section>
      <section className="code_emphasy">
        My code thrives for <b>readability</b>, for everyone to be able to form
        a simple grasp on first sight.
        <br /> It excites me everytime I tackle different and challenging
        projects. I know then I have something new to learn. And programming is
        all about <b>learning something new everyday</b>.
      </section>
      <section className="third-section">
        <h2>As a person</h2>
        <p>
          If I had to describe myself to anyone in just a single word, that
          would be <b>resourceful</b>. I love being creative, to work in an
          unconventional way, breaking boundaries. I love that!
        </p>
      </section>
      <section className="four-section">
        <h2>As a colleague</h2>
        <p>
          I love team work. <b>I am a team player!</b>. I have done this in many
          occassions where I either had to lead a team or work with a group of
          problem solvers. I believe two minds connected together stands a
          better chance compared to one. There's always something new to learn
          from others.
          <b /> My communication skills were well boosted along my journey as a
          high school student where I was a head of school learners through the
          Representative Council of Learners(RCL) program and a head of event
          and environment program.
          <br />
          Working with different groups and sharing ideas with them got us very
          far. I conform by the principle <b>"we"</b> as to <b>"I"</b> when
          working in a group.
        </p>
      </section>

      <h3 className="see-soon">I wish to hear from you soon!</h3>
    </main>
  );
}

export default About;
