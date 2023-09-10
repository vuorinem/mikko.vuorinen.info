import Image from "next/image"

import ExternalLink from "@/components/external-link"

import styles from './page.module.css'

import amigaImage from '../../public/history/amiga.jpg'
import cardealerImage from '../../public/history/cardealer_screenshot.png'
import jklautoImage from '../../public/history/jklautotarvike_screenshot.png'
import opekaImage from '../../public/history/opeka_report_screenshot.png'
import lahjalista2010 from '../../public/history/lahjalista-2010.png'
import lahjalista2013 from '../../public/history/lahjalista-2013.png'
import kuvapankki from '../../public/history/kuvapankki_screenshot.png'

export default function History() {

    return (
        <div className={styles.history}>
            <h1>History</h1>
            <section className={styles.intro}>
                <Image
                    className={styles.borderedImage}
                    src={amigaImage}
                    alt="Old Amiga computer" />
                <p>
                    This is the history of me, in the context of software engineering. My goal is to give you a complete picture of my experience and where it is rooted. I also hope to convey my values as a software professional, which stem from and are guided by my values as an individual. [FB: Rethink this after completing content]
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
                <h2>The Internet and The Web - The Dream(weaver)</h2>
                <div className={styles.screenshot}>
                    <Image
                        src={cardealerImage}
                        alt="Screenshot from an old website with a menu and a form in Finnish" />
                    <p><ExternalLink href="https://web.archive.org/">Web archive</ExternalLink> screenshot from the first commercial website I built</p>
                </div>
                <p>
                    While making games had taken its place as my ultimate goal for learning programming, I started to dabble with building things for the internet and creating my own websites. <b>C++</b> turned out to be less than ideal for the web, so while I have later tried building an <ExternalLink href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">IRC</ExternalLink> bot and a simple web server with it, I quickly started looking for more suitable tools. After learning to use applications such as <ExternalLink href="https://en.wikipedia.org/wiki/Microsoft_FrontPage">FrontPage</ExternalLink> and <ExternalLink href="https://en.wikipedia.org/wiki/Dreamweaver">Dreamweaver</ExternalLink>, and getting familiar with languages like <b>HTML</b> and <b>CSS</b>, I built my first commercial website for a local car dealer. Eventually, that turned into building several web-based systems for them in the coming decade. It also gave me a nudge to start learing more about the web in general, how it works, and how we can get the most out of it.
                </p>
                <p>
                    I also started combining my experience with VB and the web. Using <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_for_Applications">VBA</ExternalLink>, I automated data retrieval processes between Excel spreadsheets and external systems. It was one of the first times I built a system integration. There is a certain excitement in making two systems talk to each other that is unique. I wonder if it has something to do with making existing systems work together to do more than what they were built to do.
                </p>
            </section>
            <section>
                <h2>The Long University Years</h2>
                <p>
                    When it was time to decide what to do after graduating upper secondary school, I took the easy choice of applying to a university that was in my home city Jyväskylä. The course I selected was <b>Information Systems Science</b>, where I could continue to learn about programming, and start to build more theoretical understanding about software engineering as a whole. For the first year, I thrived in the challenging environment and took as many classes as I possibly could. My experience in programming helped me to stay on top of the practical side of the studies, and I was extremely interested in learning about the rest, especially anything about software engineering methodologies. I started learning about <b>Waterfall</b>, <ExternalLink href="https://en.wikipedia.org/wiki/Rational_unified_process">RUP</ExternalLink>, <b>UML</b> &ndash; and my new sage, <ExternalLink href="https://en.wikipedia.org/wiki/Extreme_programming">XP</ExternalLink>. While learning new languages like <b>Java</b> and <b>Delphi</b> was interesting, I found myself most fascinated by more theoretical parts such as <b>object-oriented design</b>, <b>database design</b> and <b>architecture</b>.
                </p>
                <p>
                    In the second year, however, I started to wonder if the road I had chosen would take me to my goal, which was still to be a game programmer. The university course was heavy on theory and didn&apos;t have many classes specifically for building games. When my cousin with similar goals was applying for a university and chose one in Tampere that was more suitable for it, I decided to apply as well. We ended up starting our course in <b>Tampere University of Technology</b> (now part of <ExternalLink href="https://www.tuni.fi/en">Tampere University</ExternalLink>) at the same time in 2004. But during my studies there, I ended up leaning more towards methodologies and architecture instead of game-specific classes, and found topics like computer graphics extremely challenging and not as interesting as I had anticipated. By the time we had to choose our major, I had come to a conclusion that game programming was not for me. I loved playing games more than ever, and I did contribute some code to game projects that my cousin was working on, but I had found my field elsewhere.
                </p>
            </section>
            <section>
                <h2>Growing into a web developer</h2>
                <p>
                    During all the years of studying, I continued learning about web development in my free time, and built more and more complicated web systems, sometimes making some extra money from it. One of the most educational experiences was building my own <b>web framework</b>. I had learned more about frontend and backend technologies, and <b>PHP</b> had become my main language on the server-side (after short spurts with <b>SSI</b> and <b>PERL</b> via CGI). The first version of the framework formed naturally: I took common functionality of various websites I had built and put them in a form that can be easily re-used, and then expanding it into a template for new websites. The second version was built more purposefully, and I used the experience from previous websites to make sure it is configurable and extendable to support all the necessary use cases. After using the framework to build several websites and updating it to adapt to new needs, I began to realise the amount of work it required. That is the kind of experience that helps me to always appreciate the frameworks and their developers now that I&apos;m smart enough to not build my own.
                </p>
                <div className={styles.screenshot}>
                    <Image
                        src={jklautoImage}
                        alt="Screenshot from Jyväskylän Autotarvike Oy website" />
                    <p>Screenshot from the same car dealer website in 2013</p>
                </div>
                <p>
                    The PHP framework I adopted after moving away from my own was <ExternalLink href="https://www.yiiframework.com/">Yii</ExternalLink>. It served well for a long time, and I didn&apos;t see a need to switch to something else, even after trying out popular ones like <b>Drupal</b>, <b>CakePHP</b> and <b>Symphony</b>. Later on, I would learn a lot more about all the different aspects of selecting a framework. Most of them are not easily visible when working by myself on websites that don&apos;t get many changes, but they become more evident when considering work in a team of diverse professionals, recruitment challenges, complex deployment pipelines, support and maintenance and so on.
                </p>
                <p>
                    At the later stage of my university studies, it became clear that I wanted to dedicate most of my time to work with the internet and online systems of some sort. I chose <b>hypermedia</b> as my major, as I was interested in the theoretical aspects of modelling networks of data as well as the applied aspect of implementing systems using hypermedia tools. I might not use <ExternalLink href="https://en.wikipedia.org/wiki/Resource_Description_Framework">RDF</ExternalLink> or <ExternalLink href="https://en.wikipedia.org/wiki/Web_Ontology_Language">OWL</ExternalLink> much nowadays, but they were an important part in building my understanding about <b>semantic data</b> and <b>markup languages</b>, as well as the <ExternalLink href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium">W3C</ExternalLink> and various standartization processes of web technologies.
                </p>
            </section>
            <section>
                <h2>Growing into an adult human</h2>
                <p>
                    So far I had lived in a relative safety of my home country, in a relative ease of doing mostly things that I was comfortable with and relatively good at. My growing interest in Japan through anime was pulling me into a different direction. Before I knew it, I was taking Japanese lessons, and with a little push from my big brother I was on a plane, on my way to <ExternalLink href="https://www.tohoku.ac.jp/en/">Tohoku University</ExternalLink> in Sendai. Ahead of me was a for a full year as an exchange student, completely new and unfamiliar environment and a completely different lifestyle. From the second I landed in Tokyo for a week of solo travelling before the semester start, I felt the nervousness turn into excitement and then into a elated sense of wonder. Only over a decade later did I start to understand myself enough to see the pattern: I thrive when exploring unfamiliar terrain and facing the unknown.
                </p>
                <p>
                    The year in Japan taught me many things, but most importantly for this story, it taught me to work (and live) with different people. I didn&apos;t improve much in my programming skills or gain knowledge of the latest features in languages and frameworks. Instead, I worked in a signal processing lab where I gave presentations (one in <b>English</b> and one in <b>Japanese</b>), talked daily to people from very different fields and many different countries, learned about Japanese culture with Japanese people and fellow foreigners, experienced being an outsider, and supported each other in the dorm room and class room.
                </p>
                <p>
                    During the time in Japan I also found <ExternalLink href="https://en.wikipedia.org/wiki/Kendo">kendo</ExternalLink>, a martial art based on Japanese sword fighting techniques and samurai spirit. I joined one of the university kendo clubs where my roommate practiced, and I was hooked by the friendliness of all the club members as much as kendo itself. Soon they became a group of friends unlike anything I had experienced before, and I dedicated a lot of my time and even more of my focus into kendo and the club during the exchange year. Staring kendo put me in the path of growing myself in a very different way &mdash; in a way that I have found invaluable, and after 16 years of practicing, an inseparable part of myself. Explaining how kendo has affected me would be an essay of its own, but some of the most important things include building confidence, coaching others and respecting every encounter. These come from seeing myself improve, taking part in competitions and gradings, receiving and giving feedback, travelling to kendo events, and eventually teaching classes of both beginner and advanced kendo practioners.
                </p>
                <p>
                    Once back in Finland, the end of my university time consisted mostly of bigger group projects and the MSc Thesis. The group work gave me a glimpse into working on an actual project with a set goal and a team to achieve that goal, whereas the thesis required academic approach with the associated background research and a rigorous writing process. I also decided to write my thesis in English to showcase and improve my written language skill level.
                </p>
            </section>
            <section>
                <h2>Start of career</h2>
                <p>
                    After graduating from university, I wanted to deal with the general conscription, which is required for most men in Finland before they turn 30. As a pacifist, military service was out of question, so I applied for non-military service in <b>University of Tampere</b> (now part of Tampere University). I took part in several research projects, usually assisting the researchers in interviews, transcriptions and write-ups, but slowly drifting towards tasks where I could better apply my software knowledge. After co-authoring <ExternalLink href="https://trepo.tuni.fi/handle/10024/65716">a guide for selecting a wiki tool</ExternalLink>, I moved to a project called Opeka. The work with Opeka became the main part of my responsibilities at University of Tampere, and allowed me to move from my one year of non-military service placement into a full-time job as a software engineer.
                </p>
            </section>
            <section className={styles.caseStudy}>
                <h3>Case study: Opeka</h3>
                <p>
                    <b>Opeka</b> is a tool to gather data from school teachers about they use information technology (see <ExternalLink href="https://opeka.fi/en/presentation/index">What is Opeka?</ExternalLink>). With a project researcher who focused on the research questions and the analysis of the data, my role was to be the software expert in the team, taking care of the <b>technical design and implementation</b> of the system. But with mostly just the two of us in the team, it was very much a collaborative effort in all parts. We worked in a very <b>iterative</b> way, going through multiple versions where the contents and functionality was improved and increased in each iteration, as well as the number of respondents and the project scale overall. We conducted <b>pilot study</b> to test the <b>usability</b> of the system and to refine the question set before releasing the first public version to selected schools.
                </p>
                <div className={styles.screenshot}>
                    <Image
                        src={opekaImage}
                        alt="Screenshot from Opeka report page" />
                    <p>Screenshot from one of the Opeka report pages</p>
                </div>
                <p>
                    The questionnaires were directed to teachers, so we worked directly with them to make sure they could use the system with as little friction as possible, and that the answers were meaningful when analyzing the data. This involved tailoring the contents to hit the perfect balance between the amount of time teachers had to spend answering and the amount of data we could gather. We used graphical question formats and visualizations of respondents&apos; answers compared to their peers to make answering easier and more rewarding. Getting <b>feedback</b> was essential as the technology experience level and the situational context where the system was used was very different from our own.
                </p>
                <p>
                    Working with schools, the goverment and various administrative bodies was a key part in the project in many ways. To demonstrate the usefulness of Opeka for decision makers we highlighted the importance of gathering the data and showed how our way of gathering it was better than the alternatives. In addition to research publications from the gathered data, we also built various reports into the systems that could be accessed by different levels of administration, and a more restricted public view. Although my role was more on the technical side, I had gained a lot of experience about the subject to give my opinion on contents questions as well, and I was a key part in discussions when planning new features and evaluating their feasibility.
                </p>
                <p>
                    We made Opeka into a nationwide system for evaluating information and communication technology usage in schools in Finland. It had to be able to handle thousands of respondents and distribute reports for schools, municipalities and goverment-level administrators. Several tools were created for cleaning up the data with as much automation as possible, while improving the questionnaires to minimize the need for clean-up in the future.
                </p>
            </section>
            <section>
                <p>
                    Aside Opeka, I worked on several smaller projects, including a prototype application for collaboratively viewing social media streams on <b>multi-touch surface table SUR40</b>, and a message wall <b>displaying SMS and Twitter messages</b> in a conference setting. The four years taught me a lot about the challenges of university research, and gave me a chance to take a lot of responsibility, not just for the software I was building but also for finding and solving problems in the wider context.
                </p>
                <p>
                    The message wall service I worked on at the university started a spin-off project with a company that was interested in the idea. While still working at the university for most of the time, I took a part time job at <ExternalLink href="https://www.mediamaisteri.com/en/">Mediamaisteri</ExternalLink> to further develop and market it as a service called Conexting and later Conex First. I did several trips around Finland with our sales representative to demonstrate the service to various organisations, while developing it based on the discussions we had with clients. In my time at Mediamaisteri, I implemented a self-service version of the service with payment integration, and some custom deployments for bigger clients.
                </p>
            </section>

            <section>
                <h2>Freelancing over the years</h2>
                <p>
                    Ever since I built my first website, I have done various freelance projects to build websites and other web-based systems as a part-time job. [FB: Add something explaioning that freelancing was and is going on with all the other stuff.] The car dealer website grew into several websites for sister companies, with an <b>integration to on-premise sales system</b> (and later on an external SaaS offering the company migrated to). Used car stock was displayed in real-time on the website, and the sales staff could use a back-office tool to enrich the online view with details that the on-premise system didn&apos;t support. In addition to the website, I also built a calendar system for arranging meetings, tracking holidays, booking meeting rooms and various functions as required. The calendar was in active use for over ten years, and still had some uses after 15 years since its conception, making it my second-longest living online creation. Which brings me to the one in the first place...
                </p>
            </section>

            <section className={styles.caseStudy}>
                <h3>Case study: Lahjalista.net</h3>
                <p>
                    [FB: Expand on the problem / situation] The idea for creating a wishlist service came from our family christmas gifting challenges at the time when my older siblings started having children. For the christmas 2005 I built a website where we could list what each of us wanted for christmas. Anyone could reserve the wish to avoid others buying the same gift. Next year, I spent a lot of time working on improving it, working with my brother to define a service that could be useful for people outside our familiy as well. We ended up with <b>Lahjalista.net</b>, a web service where anyone could create a wishlist and share a link to it.
                </p>
                <div className={styles.screenshot}>
                    <Image
                        src={lahjalista2010}
                        alt="Screenshot from Lahjalista.net front page" />
                    <p>Screenshot from Lahjalista.net in its early days</p>
                </div>
                <p>
                    The service was developed and maintained as a side project whenever time allowed, adding features based on user feedback and usage patterns. Several years after its creation, the service had gained popularity especially amongst couples who wanted to create a wish registry for their wedding. Catching up with the trend, we started to think about the business model and develop the service with a focus on weddings. Working with acquaintances with graphic and concept design expertise, the service went through two major updates. We had a strong position to avoid using ads that might distract or degrade the user experience, so we came up with a solution that added value for users while providing a sales channel for parters. Eventually this evolved into an auto-complete functionality for adding wishes, populated throgh an integration with a major retail store and other smaller partners. Some smaller features have also been added to the service, but probably more than that, features have been simplified, hidden or removed to make the user experience for the majority as good as possible.
                </p>
                <div className={styles.screenshot}>
                    <Image
                        src={lahjalista2013}
                        alt="Screenshot from Lahjalista.net front page" />
                    <p>Screenshot from Lahjalista.net after the first UI update</p>
                </div>
                <p>
                    At its most popular years, Lahjalista.net had close to 20 000 monthly visitors during wedding seasons. While there is currently not as much development or business activities around Lahjalista.net, it is still actively used. Developed with <b>PHP</b> framework <b>Yii</b>, the core software has been stable without major rework for over a decade. With a classic <b>MVC</b> archirecture and dynamic parts implemented using <b>jQuery</b>-powered <b>AJAX</b> and custom <b>JavaScript</b>, I am very content with the technology choises I have made in the initial development of the service and throughout the years. That is not to say that I wouldn&apos;t have been tempted to rewrite the whole thing in several occasions, but I have learned how unlikely I would be able to contribute that much time to one of many side projects.
                </p>
                <p>
                    Working on Lahjalista.net has been one of the defining experiences for me. It has taught what is involved in being fully responsible for a customer-facing service in a very small team with very limited time available. I have learned the value of &quot;good enough&quot; over aiming for perfection. I understand that shortcuts, workarounds and technical debt overall are tools I should have in my toolbox, not something that should be categorically avoided. I know how valuable it is to get a working solution out there, but also understand the need to avoid and prepare for the unexpected. Most of all, I have gained experience from working with users, understanding their problems and helping to solve them, incorporating their opinions and ideas into the development process while maintaining a clear vision of what we are aiming for.
                </p>
            </section>

            <section>
                <p>
                    One of the bigger freelancing projects was <b>kuvapankki.org</b>, which I did for a friend of a friend who was looking for someone to implement their idea of a photo gallery for professional photographers. The core functionality was a photo search based on tags that the photographers could set for photos they uploaded to the service. Users could select the photos they wanted to purchase, and send a purchase request. The UI had to be impressive and give a streamlined experience for users, so it was designed together with the client. One of the additional technical challenges was adding a watermark to the images to discourage using them without permission.
                </p>
                <div className={styles.screenshot}>
                    <Image
                        src={kuvapankki}
                        alt="Screenshot from kuvapankki.org gallery page" />
                    <p>Screenshot from kuvapankki.org photo search</p>
                </div>
                <p>
                    The kuvapankki.org project led to a number of smaller projects, as some of the photographers that were part of it asked me to help with their personal websites and online portfolios. These were small but interesting projects as the focus was quite different from what I was used to: instead of focusing on user experience and conveying information effectively, photographer portfolios were intended to represent the individual characteristic and style of the photographer as accurately as possible. I set aside my idea of a &quot;proper&quot; website and worked on them in a very client-led way. Although I think there was nothing wrong with that approach at the time, nowadays I would probably make more effort to apply good practices from my field and dive deeper to understand the essence of what the client wants.
                </p>
            </section>

            <section>
                <h3>Changing the scenery - Move abroad</h3>
                <p>
                    In the fall of 2013, life started pulling me to a very different direction as I moved &quot;temporarily&quot; to the UK. For some time, I continued working remotely, but by the following summer the visit to UK started to look less and less temporary. That lead to me looking for work in Aberdeen, Scotland. With my lucky choice of career, finding a job even in a foreign country was not a major challenge, and I ended up landing a software engineer role at <b>Codify</b> (now <ExternalLink href="https://www.sword-codify.com/">Sword Codify</ExternalLink>).
                </p>
                <p>
                    Codify was the first job I had where I was surrounded by other software engineers, even more so than the jobs I have had since then. Of the team of about 25 people, 20 of us were software engineers by trade. Because of that, most of the people I talked to day-to-day had a very similar way of thinking, which made the communication extremely smooth, but it also made it easily very technology-focused. This was mitigated by making sure (almost) every engineer was talking to the client and/or end-users. The responsibility of an engineer was much more than just implementing what was asked for. Especially after some significant managerial changes, engineers were involved in projects all the way, starting from the sales discussions and scoping of the project. For me it was an extremely welcome change, and I enjoyed every time I got to talk to clients about their problem and together discussed how we could solve them.
                </p>
                <p>
                    I spent over five years at Codify, which was all the time I lived in Aberdeen. The technologies used in earlier projects were mainly <b>WPF</b>, <b>WCF</b> and <b>ASP.NET MVC</b>. After the first couple of years I considered switching companies, but I was convinced to stay by getting responsibilities that were better fit for my interests and goals. I started looking into a <b>SPA</b> framework called <ExternalLink href="https://aurelia.io/">Aurelia</ExternalLink>, and eventually became a major force to drive the adaptation of modern web technologies by building necessary tooling and helping other developers. Our projects were also increasingly starting to utilize <b>Azure</b>, which was an extremely interesting set of services. My interest in modern technologies got boosted further by events and conferences I was able to attend, for example <b>NDC</b> in Oslo and London and <b>Azure Dev Tour</b> in London.
                </p>
                <p>
                    Working at Codify and the direct interaction with clients was very rewarding, but over the years I started to want something bigger, more challenging, even more risky. Moving away from Aberdeen to Edinburgh was the trigger to look
                </p>
            </section>

            <p className={styles.attributions}>
                Attributions:
                {" "}
                <ExternalLink href="https://de.wikipedia.org/wiki/Datei:Amiga_1000_PAL.jpg">Amiga 1000 PAL by Kaiiv</ExternalLink>
                {" | "}
            </p>
        </div>
    );
}
