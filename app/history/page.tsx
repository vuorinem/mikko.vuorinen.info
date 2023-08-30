import Image from "next/image"

import ExternalLink from "@/components/external-link"

import styles from './page.module.css'

import amigaImage from '../../public/history/amiga.jpg'
import cardealerImage from '../../public/history/cardealer_screenshot.png'

export default function History() {

    return (
        <>
            <h1>History</h1>
            <section className={styles.intro}>
                <Image
                    className={styles.borderedImage}
                    src={amigaImage}
                    alt="Old Amiga computer" />
                <p>
                    This is the history of me, in the context of software engineering. My goal is to give you a complete picture of my experience and where it is rooted. I also hope to convey my values as a software professional, which stem from and are guided by my values as an individual.
                </p>
            </section>

            <section>
                <h2>Gateway to programming: Gaming</h2>
                <p>
                    My first experience with a computer was not the famous Commodore 64 (unlike most of my friends at the time), but a more forgettable PC of some kind, possibly an Amiga. My computer literacy as a pre-schooler was limited to typing a few memorised commands to the <ExternalLink href="https://en.wikipedia.org/wiki/MS-DOS">MS DOS</ExternalLink> prompt in order to run <ExternalLink href="https://en.wikipedia.org/wiki/Bubble_Bobble">Bubble Bobble</ExternalLink>. I played it incessantly, so my big brother blocked me from playing the game by renaming the executable. When I finally got him to tell me the &quot;password&quot; to start the game, I wrote it down to a note, never to be forgotten. And indeed, still today I remember <code>aefthukn</code> being the command to start Bubble Bobble.
                </p>
                <p>
                    Games became a major influence for me, and sparked my interest in programming. After making a racing game using <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)">Visual Basic</ExternalLink> with my cousin (in which you could make buttons move by clicking them), I started learning <b>BASIC</b> in order to code a maze game with a friend from school. While the friend &mdash; a year senior to me &mdash; went on building an impressive drawing program in BASIC, I played with Visual Basic until I decided to ask my parents to help me buy <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Studio">Visual Studio 6.0</ExternalLink> and a book <em>C++ ja olio-ohjelmointi</em> (&quot;C++ and object-oriented programming&quot;) in order to get into more serious game programming. After several years, while the former became just one of many tools I was getting familiar with, the latter built a solid base for my programming skills and a strong opinion about the superiority of <b>object-oriented paradigm</b>.
                </p>
            </section>

            <section>
                <div className={styles.screenshot}>
                    <Image
                        src={cardealerImage}
                        alt="Screenshot from an old website with a menu and a form in Finnish" />
                    <p><ExternalLink href="https://web.archive.org/">Web archive</ExternalLink> screenshot from the first commercial website I built</p>
                </div>
                <h2>The Internet and The Web - The Dream(weaver)</h2>
                <p>
                    While making games had taken its place as my ultimate goal for learning programming, I started to dab into building things for the internet and creating my own websites. <b>C++</b> turned out to be less than ideal for the web, so while I have later tried building an <ExternalLink href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">IRC</ExternalLink> bot and a simple web server with it, I quickly started looking for more suitable tools. After learning to use applications such as <ExternalLink href="https://en.wikipedia.org/wiki/Microsoft_FrontPage">FrontPage</ExternalLink> and <ExternalLink href="https://en.wikipedia.org/wiki/Dreamweaver">Dreamweaver</ExternalLink>, and getting familiar with languages like <b>HTML</b> and <b>CSS</b>, I built my first commercial website for a local car dealer. Eventually, that turned into building several web-based systems for them in the coming decade. It also gave me a nudge to start learing more about the web in general, how it works, and how we can get the most out of it.
                </p>
                <p>
                    I also started combining my experience with VB and the web. Using <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_for_Applications">VBA</ExternalLink>, I automated somw data retrieval processes between Excel spreadsheets and external systems. It was one of the first times I built a system integration. There is a certain excitement in making two systems talk to each other that is unique. I wonder if it has something to do with making existing systems work together to do more than what they were built to do.
                </p>
            </section>
            <section>
                <h2>The Long University Years</h2>
                <p>
                    When it was time to decide what to do after graduating upper secondary school, I took the easy choice of applying to a university that was in my home city Jyväskylä. The course I selected was <b>Information Systems Science</b>, where I could continue to learn about programming, and start to build more theoretical understanding about software engineering as a whole. For the first year, I thrived in the challenging environment and took as much classes as I possibly could. My experience in programming helped me to stay on top of the practical side of the studies, and I was extremely interested in learning about the rest, especially anything about software engineering methodologies. I started learning about <b>Waterfall</b>, <ExternalLink href="https://en.wikipedia.org/wiki/Rational_unified_process">RUP</ExternalLink>, <b>UML</b> &ndash; and my new sage, <ExternalLink href="https://en.wikipedia.org/wiki/Extreme_programming">XP</ExternalLink>. While learning new languages like <b>Java</b> and <b>Delphi</b> was interesting, I found myself most fascinated by more theoretical parts such as <b>object-oriented design</b>, <b>database design</b> and <b>architecture</b>.
                </p>
                <p>
                    In the second year, however, I started to wonder if the road I had chosen would take me to my goal, which was still to be a game programmer. The university course was heavy on theory and didn&apos;t have much classes specifically for building games. When my cousin with similar goals was applying for a university and chose one in Tampere that was more suitable for it, I decided to apply as well. We ended up starting our course in <b>Tampere University of Technology</b> (now part of <ExternalLink href="https://www.tuni.fi/en">Tampere University</ExternalLink>) at the same time in 2004. But during my studies there, I ended up leaning more towards methodologies and architecture instead of game-specific classes, and found topics like computer graphics extremely challenging and not as interesting as I had anticipated. By the time we had to choose our major, I had come to a conclusion that game programming was not for me. I loved playing games more than ever, and I did contribute some code to the game projects that my cousin was working on, but I had found my field elsewhere.
                </p>
            </section>
            <section>
                <h2>Growing into a web developer</h2>
                <p>
                    During all the years of studying, I continued learning about web development in my free time, and built more and more complicated web systems, while making some extra money out of it. One of the most educational experience was building my own <b>web framework</b>. I had learned more about frontend and backend technologies, and <b>PHP</b> had become my main language on the server-side (after short spurts with <b>SSI</b> and <b>PERL</b> via CGI). The first version of the framework formed naturally: I took common functionality of various websites I had built and put them in a form that can be easilly re-used, and then expanding it into a template for new websites. The second version was built more purposefully, and I used the experience from previous websites to make sure it is configurable and extendable to support all the necessary use cases. After using the framework to build several websites and updating it to adapt to new needs, I began to realise the amount of work it required. That is the kind of experience that helps me to always appreciate the frameworks and their developers now that I&apos;m smart enough to not build my own (for now).
                </p>
                <p>
                    The PHP framework I adopted after moving away from my own was <ExternalLink href="https://www.yiiframework.com/">Yii</ExternalLink>. It served well for a long time, and I didn&apos;t see a need to switch to something else, even after trying out multiple ones like <b>Drupal</b>, <b>CakePHP</b> and <b>Symphony</b>. Later on, I would learn a lot more about all the different aspects that are affected by selecting a framework. Most of them are not easily visible when working by myself on websites that doesn&apos;t get many changes, but they become more evident when considering work in a team of diverse professionals, recruitment challenges, complex deployment pipelines, support and maintenance and so on.
                </p>
                <p>
                    At the later stage of my university studies, it became clear that I wanted to work with the internet and online systems of some sort. I chose <b>hypermedia</b> as my major, as I was interested in the theoretical aspects of modelling networks of data as well as the applied aspect of implementing systems using hypermedia tools.
                </p>
            </section>
            <section>
                <h2>Growing into an adult human</h2>
                <p>
                    So far I had lived in a relative safety of my home country, in a relative ease of doing mostly things that I was comfortable with and relatively good at. My growing interest in Japan through anime was pulling me into a different direction. Before I knew it, I was taking Japanese lessons, and with a little push from my big brother I was on a plane on my way to <b>Tohoku University</b> in Sendai. The year in Japan taught me many things, but most importantly for this story, it taught me to work (and live) with different people. While I didn&apos;t improve much in my programming skills or gain knowledge of the latest features in languages and frameworks, I worked in a signal processing lab where I gave presentations (one in <b>English</b> and one in <b>Japanese</b>), talked daily to people from very different fields and many different countries, learned about Japanese culture with Japanese people and fellow foreigners, experienced being an outsider, and supported each other in the dorm room and class room.
                </p>
                <p>
                    During the time in Japan I also found <ExternalLink href="https://en.wikipedia.org/wiki/Kendo">kendo</ExternalLink>, which put me in the path of growing myself in a very different way &mdash; in a way that I have found invaluable, and after 16 years of practicing, inseparable part of myself. Explaining how kendo has affected me would be an essey of its own, but some of the most related things include building confidence, coaching others and respecting every encounter.
                </p>
                <p>
                    The end of my university time consisted mostly of bigger group projects and the MSc Thesis. The group work gave me a glimpse into working on an actual project with a set goal and a team to achieve that goal, whereas the thesis required academic approach with the associated background research and rigorous writing process. 
                </p>
            </section>

            <p className={styles.attributions}>
                Attributions:
                {" "}
                <ExternalLink href="https://de.wikipedia.org/wiki/Datei:Amiga_1000_PAL.jpg">Amiga 1000 PAL by Kaiiv</ExternalLink>
                {" | "}
            </p>
        </>
    );
}
