import Image from "next/image"

import ExternalLink from "@/components/external-link"

import styles from './page.module.css'

import amigaImage from '../../public/history/amiga.jpg'
import cardealerImage from '../../public/history/cardealer_screenshot.png'
import jklautoImage from '../../public/history/jklautotarvike_screenshot.png'
import opekaImage from '../../public/history/opeka_report_screenshot.png'
import lahjalista2010 from '../../public/history/lahjalista-2010.png'
import lahjalista2013 from '../../public/history/lahjalista-2013.png'
import lahjalista2017 from '../../public/history/lahjalista-2017.png'
import kuvapankki from '../../public/history/kuvapankki_screenshot.png'
import edinburghImage from '../../public/history/edinburgh_castle.jpg'

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
                <h4>From the very beginning, years &#9608;&#9608;&#9608;&#9608; to 1999</h4>
                <p>
                    My first experience with a computer was not the famous Commodore 64 (unlike most of my friends at the time), but a more forgettable PC of some kind, possibly an Amiga. My computer literacy as a pre-schooler was limited to typing a few memorised commands to the <ExternalLink href="https://en.wikipedia.org/wiki/MS-DOS">MS DOS</ExternalLink> prompt in order to run <ExternalLink href="https://en.wikipedia.org/wiki/Bubble_Bobble">Bubble Bobble</ExternalLink>. I played it incessantly, so my big brother blocked me from playing the game by renaming the executable. When I finally got him to tell me the &quot;password&quot; to start the game, I wrote it down to a note, never to be forgotten. And indeed, still today I remember <code>aefthukn</code> being the command to start Bubble Bobble.
                </p>
                <p>
                    Games became a major influence for me, and sparked my interest in programming. After making a racing game using <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)">Visual Basic</ExternalLink> with my cousin (in which you could make buttons move by clicking them), I started learning <b>BASIC</b> in order to code a maze game with a friend from school. While the friend &mdash; a year senior to me &mdash; went on building an impressive drawing program in BASIC, I played with Visual Basic until I decided to ask my parents to help me buy <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Studio">Visual Studio 6.0</ExternalLink> and a book <em>C++ ja olio-ohjelmointi</em> (&quot;C++ and object-oriented programming&quot;) in order to get into more serious game programming. After several years, while the former became just one of many tools I was getting familiar with, the latter built a solid base for my programming skills and a strong opinion about the superiority of <b>object-oriented paradigm</b>.
                </p>
            </section>

            <section>
                <h2>The Internet and The Web - The Dream(weaver)</h2>
                <h4>Senior high years from 1999 to 2002 (roughly)</h4>
                <div className={styles.borderedImage}>
                    <Image
                        src={cardealerImage}
                        alt="Screenshot from an old website with a menu and a form in Finnish" />
                    <p><ExternalLink href="https://web.archive.org/">Web archive</ExternalLink> screenshot from the first commercial website I built for a local car dealer</p>
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
                <h4>From entering university at 2002 to about 2006</h4>
                <p>
                    When it was time to decide what to do after graduating upper secondary school, I took the easy choice of applying to a university that was in my home city Jyväskylä. The course I selected was <b>Information Systems Science</b>, where I could continue to learn about programming, and start to build more theoretical understanding about software engineering as a whole. For the first year, I thrived in the challenging environment and took as many classes as I possibly could. My experience in programming helped me to stay on top of the practical side of the studies, and I was extremely interested in learning about the rest, especially anything about software engineering methodologies. I started learning about <b>Waterfall</b>, <ExternalLink href="https://en.wikipedia.org/wiki/Rational_unified_process">RUP</ExternalLink>, <b>UML</b> &ndash; and my new sage, <ExternalLink href="https://en.wikipedia.org/wiki/Extreme_programming">XP</ExternalLink>. While learning new languages like <b>Java</b> and <b>Delphi</b> was interesting, I found myself most fascinated by more theoretical parts such as <b>object-oriented design</b>, <b>database design</b> and <b>architecture</b>.
                </p>
                <p>
                    In the second year, however, I started to wonder if the road I had chosen would take me to my goal, which was still to be a game programmer. The university course was heavy on theory and didn&apos;t have many classes specifically for building games. When my cousin with similar goals was applying for a university and chose one in Tampere that was more suitable for it, I decided to apply as well. We ended up starting our course in <b>Tampere University of Technology</b> (now part of <ExternalLink href="https://www.tuni.fi/en">Tampere University</ExternalLink>) at the same time in 2004. But during my studies there, I ended up leaning more towards methodologies and architecture instead of game-specific classes, and found topics like computer graphics extremely challenging and not as interesting as I had anticipated. By the time we had to choose our major, I had come to a conclusion that game programming was not for me. I loved playing games more than ever, and I did contribute some code to game projects that my cousin was working on, but I had found my field elsewhere.
                </p>
            </section>
            <section>
                <h2>Growing into a web developer</h2>
                <h4>Somewhere between 2004 and 2007</h4>
                <p>
                    During all the years of studying, I continued learning about web development in my free time, and built more and more complicated web systems, sometimes making some extra money from it. One of the most educational experiences was building my own <b>web framework</b>. I had learned more about frontend and backend technologies, and <b>PHP</b> had become my main language on the server-side (after short spurts with <b>SSI</b> and <b>PERL</b> via CGI). The first version of the framework formed naturally: I took common functionality of various websites I had built and put them in a form that can be easily re-used, and then expanding it into a template for new websites. The second version was built more purposefully, and I used the experience from previous websites to make sure it is configurable and extendable to support all the necessary use cases. After using the framework to build several websites and updating it to adapt to new needs, I began to realise the amount of work it required. That is the kind of experience that helps me to always appreciate the frameworks and their developers now that I&apos;m smart enough to not build my own.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={jklautoImage}
                        alt="Screenshot from Jyväskylän Autotarvike Oy website" />
                    <p>The same car dealer website in 2013</p>
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
                <h4>From world travels in 2007 until graduation at 2010</h4>
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
                <h4>The time at Tampere University from 2010 to 2014</h4>
                <p>
                    After graduating from university, I wanted to deal with the general conscription, which is required for most men in Finland before they turn 30. As a pacifist, military service was out of question, so I applied for non-military service in <b>University of Tampere</b> (now part of Tampere University). I took part in several research projects, usually assisting the researchers in interviews, transcriptions and write-ups, but slowly drifting towards tasks where I could better apply my software knowledge. After co-authoring <ExternalLink href="https://trepo.tuni.fi/handle/10024/65716">a guide for selecting a wiki tool</ExternalLink>, I moved to a project called Opeka. The work with Opeka became the main part of my responsibilities at University of Tampere, and allowed me to move from my one year of non-military service placement into a full-time job as a software engineer.
                </p>
            </section>
            <section className={styles.caseStudy}>
                <h3>Case study: Opeka</h3>
                <p>
                    <b>Opeka</b> is a tool to gather data from school teachers about they use information technology (see <ExternalLink href="https://opeka.fi/en/presentation/index">What is Opeka?</ExternalLink>). With a project researcher who focused on the research questions and the analysis of the data, my role was to be the software expert in the team, taking care of the <b>technical design and implementation</b> of the system. But with mostly just the two of us in the team, it was very much a collaborative effort in all parts. We worked in a very <b>iterative</b> way, going through multiple versions where the contents and functionality was improved and increased in each iteration, as well as the number of respondents and the project scale overall. We conducted <b>pilot study</b> to test the <b>usability</b> of the system and to refine the question set before releasing the first public version to selected schools.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={opekaImage}
                        alt="Screenshot from Opeka report page" />
                    <p>One of the Opeka report pages</p>
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
                <h4>During spare time all the way from 1999 until about 2017 (and still sometimes)</h4>
                <p>
                    Ever since I built my first website at the end of 90&apos;s, I have done various freelance projects to build websites and other web-based systems aside my day job, university studies or school responsibilities. Some of the systems have been for paying clients, others for various personal projects, but all of them have helped me learn more about web development.
                </p>
                <p>
                    The first car dealer website I built grew into several websites for sister companies in early 2000&apos;s, with an <b>integration to on-premise sales system</b> (and later on an external SaaS offering the company migrated to). Used car stock was displayed in real-time on the website, and the sales staff could use a back-office tool to enrich the online view with details that the on-premise system didn&apos;t support. In addition to the website, I also built an online calendar system in 2004 for arranging meetings, tracking holidays, booking meeting rooms and various other requirements that were discovered. The calendar was in active use for over ten years, and still had some uses after 15 years since its conception, making it my second-longest living online creation. Which brings me to the one in the first place...
                </p>
            </section>

            <section className={styles.caseStudy}>
                <h3>Case study: Lahjalista.net</h3>
                <p>
                    When all the three of my older siblings started to have their own children, planning the gift-giving for our family Christmas gathering became quite a challenge. Most of us had things we wanted to get, instead of receiving something that would end up unused. And everyone wanted to give something useful, but avoid buing the same gift as someone else. These challenges gave birth to an idea for an online wishlist service. For the christmas 2005 I built a website where we could list what each of us wanted for christmas. Anyone could then go and reserve the wish, preventing others from buying the same gift. Next year, I spent a lot of time improving it, working with my brother to define a service that could be useful for people outside our familiy as well. We ended up with <b>Lahjalista.net</b>, a web service where anyone could create a wishlist and share a link to it.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={lahjalista2010}
                        alt="Screenshot from Lahjalista.net front page" />
                    <p>Lahjalista.net in its early days</p>
                </div>
                <div className={styles.borderedImage}>
                    <Image
                        src={lahjalista2013}
                        alt="Screenshot from Lahjalista.net front page" />
                    <p>Lahjalista.net after the first UI update</p>
                </div>
                <div className={styles.borderedImage}>
                    <Image
                        src={lahjalista2017}
                        alt="Screenshot from Lahjalista.net front page" />
                    <p>Current Lahjalista.net front page</p>
                </div>
                <p>
                    The service was developed and maintained as a side project whenever time allowed, adding features based on user feedback and usage patterns. Several years after its creation, the service had gained popularity especially amongst couples who wanted to create a wish registry for their wedding. Catching up with the trend, we started to think about the business model and develop the service with a focus on weddings. Working with acquaintances with graphic and concept design expertise, the service went through two major updates. We had a strong position to avoid using ads that might distract or degrade the user experience, so we came up with a solution that added value for users while providing a sales channel for parters. Eventually this evolved into an auto-complete functionality for adding wishes, populated throgh an integration with a major retail store and other smaller partners. Some smaller features have also been added to the service, but probably more than that, features have been simplified, hidden or removed to make the user experience for the majority as good as possible.
                </p>
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
                <div className={styles.borderedImage}>
                    <Image
                        src={kuvapankki}
                        alt="Screenshot from kuvapankki.org gallery page" />
                    <p>Photo search page in kuvapankki.org</p>
                </div>
                <p>
                    The kuvapankki.org project led to a number of smaller projects, as some of the photographers that were part of it asked me to help with their personal websites and online portfolios. These were small but interesting projects as the focus was quite different from what I was used to: instead of focusing on user experience and conveying information effectively, photographer portfolios were intended to represent the individual characteristic and style of the photographer as accurately as possible. I set aside my idea of a &quot;proper&quot; website and worked on them in a very client-led way. Although I think there was nothing wrong with that approach at the time, nowadays I would probably make more effort to apply good practices from my field and dive deeper to understand the essence of what the client wants.
                </p>
            </section>

            <section>
                <h2>Changing the scenery - Move abroad</h2>
                <h4>From the move to Leicester in 2013, to Aberdeen in 2014, all the way to summer 2019</h4>
                <p>
                    In the fall of 2013, life started pulling me to a very different direction as I moved &quot;temporarily&quot; to the UK. For some time, I continued working remotely, but by the following summer the visit to UK started to look less and less temporary. That lead to me looking for work in Aberdeen, Scotland. With my lucky choice of career, finding a job even in a foreign country was not a major challenge, and I ended up landing a Software Engineer role at <b>Codify</b> (now <ExternalLink href="https://www.sword-codify.com/">Sword Codify</ExternalLink>).
                </p>
                <p>
                    Codify was the first job I had where I was surrounded by other software engineers, even more so than the jobs I have had since then. Of the team of about 25 people, 20 of us were software engineers by trade. Because of that, most of the people I talked to day-to-day had a very similar way of thinking, which made the communication extremely smooth, but it also made it easily very technology-focused. This was mitigated by making sure (almost) every engineer was talking to the client and/or end-users. The responsibility of an engineer was much more than just implementing what was asked for. Especially after some significant managerial changes, engineers were involved in projects all the way, starting from the sales discussions and scoping of the project. For me it was an extremely welcome change, and I enjoyed every time I got to talk to clients about their problem and together discussed how we could solve them.
                </p>
                <p>
                    I spent over five years at Codify, which was all the time I lived in Aberdeen. The technologies used in earlier projects were mainly <b>WPF</b>, <b>WCF</b> and <b>ASP.NET MVC</b>, with <b>MSSQL</b> being the go-to database solution. After the first couple of years I started to crave for more web-focused projects, so I considered switching companies, but I was convinced to stay by getting responsibilities that were better fit for my interests and goals. I started looking into a <b>SPA</b> framework called <ExternalLink href="https://aurelia.io/">Aurelia</ExternalLink>, and eventually became a major force to drive the adaptation of modern web technologies by building necessary tooling and helping other developers, earning the title of Senior Software Engineer in 2017 to match the role. Our projects were also increasingly starting to utilize <b>Azure</b>, which was an extremely interesting set of services. My interest in modern technologies got boosted further by events and conferences I was able to attend, for example <b>NDC</b> in Oslo and London and <b>Azure Dev Tour</b> in London. I also started to gain more specialized knowledge about authentication and authorization protocols for the web as some applications I built utilized <b>OAuth</b> and <b>OpenID Connect</b> with <b>Azure AD B2C</b> for logging in.
                </p>
            </section>

            <section className={styles.caseStudy}>
                <h3>Case study: Risk management application</h3>
                <p>
                    A new client approached Codify with a plan for an application to support companies&apos; risk management process. The idea was to create a simple application with a strong focus on user-friendliness, allowing companies to use it without external support or specialized training, while providing numerous advantages over spreadsheet-based risk tracking. As the main developer on the project, I had regular in-depth discussions with the client from the very beginning, working to understand the problem space better and to come up with solutions <b>collaboratively</b>.
                </p>
                <p>
                    There were roughly two types of meetings I had with the client: ideation of a solution for a new requirement, and review of a <b>prototype</b> of previously discussed solution. Ideation was driven by the client as they explained the problem and the solution they had in mind based on their expertice in the field, while I provided concrete suggestions of a feasible way to implement a solution, often using hand-drawn examples of the user interface components. The result of such meeting was usually an agreed plan forwards in a form of screen scetches, bullet points, formulas as well as timelines and budget. I would then go on and work on the application accordingly, often emailing the client to ask for clarifications as the details of the problem revealed themselves during the development.
                </p>
                <p>
                    Once there was enough implemented to get an feel of how the solutions work in practice, I would either provide an updated prototype for the client to access and assess in detail, or we would arrange a review meeting to go through it and iterate further when necessary. Face-to-face reviews could include small adjustments to the solution on the fly, or planning of the next iteration in more detail in similar way as the original ideation sessions. The development of the system continued in that fashion for some time, and the application expanded from the original idea while it was demonstrated to and adopted by companies that the client worked with.
                </p>
                <p>
                    The application was one of the first ones at Codify using <b>Aurelia</b>, and provided improtant input for the Aurelia template that we were developing. UI components were built using <ExternalLink href="https://www.telerik.com/kendo-ui">Kendo UI</ExternalLink> (not because of the name, that is a pure coincidence), and <b>Azure</b> resources were used fore hosting the application and data storages. For me the best part of the development was the direct communication with the client, who was also an end-user of the solution with all the relevant domain knowledge. The feedback loop was streamlined and made both the development team and the client happy with the progress and the quality of the solution.
                </p>
            </section>

            <section>
                <p>
                    Several other applications I worked on at Codify were focused on novel data visualizations. One of them was a tool that allowed visualizing and tagging a 3D environment based on a set of point cloud scenes generated from high-accuracy photographs. I worked a bit on the main desktop application, but I was mostly focused on the web version that we started developing at the time. The browser application used <b>WebGL</b>-based <ExternalLink href="https://threejs.org/">three.js</ExternalLink> library to provide the 3D visualization using data from the API of the main application, without having to install anything on the end-user&apos;s machine. Another example was an online ship route visualizing tool that used planned ship schedules to animate the ships moving over the globe, and detected if there was a risk of collision. The map was displayed using <ExternalLink href="https://leafletjs.com/">Leaflet</ExternalLink> and <ExternalLink href="https://www.openstreetmap.org/">OpenStreetMap</ExternalLink>.
                </p>
            </section>

            <section>
                <h2>Academia strikes back: Freelancing to support a research project</h2>
                <h4>Various projects between 2018 and 2023</h4>
                <p>
                    While working at Codify, I started a side project supporting my partner&apos;s research at the University of Aberdeen. This lead to a development of several applications and an interesting research collaboration, as they continued on the topic as a PhD project at the University of Edinburgh. 
                </p>
            </section>
            <section className={styles.caseStudy}>
                <h3>Case study: e-reader application</h3>
                <p>
                    The e-reader project started with a need to create an online reader application for academic course materials, so that various behavioural data could be collected while students were engaged in reading the course texts. The application had to run on a browser on both desktop and mobile devices, and it had to include functions to highlight and annotate the texts, as well as a questionnaire before and after the text. Popular web readers such as Overdrive and Kindle Cloud Reader were used as benchmarks so that it would be recognizable for people who had experience reading books online. The text was displayed one page at the time and navigated by turning the page, or by jumping to a specific position using a progress bar at the bottom of the view. The amount of text visible on each page adapted to the browser window. All of these features were developed collaboratively to ensure that both the research aspect and the software engineering aspect were sufficiently taken into account.
                </p>
                <p>
                    The first version of the e-reader was used in an Aberdeen University study in 2019 where students read materials assigned to them as part of course work. The texts were adapted to HTML format that could be displayed by the reader in a page-by-page. Before the main data collection phase, a pilot study was conducted with several participants. This was necessary not just for testing the reader itself, but also to ensure the study could be run smoothly and the data collected by the reader containet the necessary information for the analysis. Based on the pilot feedback and observations, some final tweaks were made to the software. In the study, overall about 50 students took part, and the results werer used in writing a Masters dissertation in Psychology.
                </p>
                <p>
                    After successfully applying the e-reader to conduct a study on reading academic materials, it was then modified to support a second study at the University of Edinburgh, focusing this time on <b>recreational reading</b>. This version of the reader had a selection of short stories, and participants were assigned one of them to read based on their answers in a newly added questionnaire. Other features were adapted support the new study as well, and a new pilot phase was done to ensure the quality of user experience and data collection features. The main study included 60 participants using the e-reader over two weeks. As an additional challenge, participants were compensated for completing the required parts of the study, which meant that we had to be able to track the completion while maintaining anonymity of the data collected from each participant.
                </p>
                <p>
                    The third study with the e-reader was in many ways on a different scale. To attract participants, a library of <b>15 full-length books</b> was obtained by collaborating with popular authors and their publishers. Participants could freely select the book they wanted to read using a library feature, which was developed to include data collection features similar to the main reader. Another major addition was a <b>personal infographic</b> page for participants who had read enough in order for the application to generate various graphs and sum-ups on their reading process. While my role was only the implementation of the software, all the changes and new requirements were discussed and worked on collaboratively, taking into account the different context of a much larger-scale study. After completing a pilot phase, the application was available for about 11 months, and attracted over 1200 participants.
                </p>
                <p>
                    At the time when the initial study was starting, <b>Aurelia</b> was the front-end framwroek I was the most familiar with, so I used it for the client-side application. The front-end was deployed to <b>Azure</b> as a free tier <b>App Service</b> in the first study, but I switched to <b>Vercel</b> in the second study to allow using a custom domain without much additional costs. The back-end was a <b>.NET Core Web API</b> deployed to <b>Azure</b> with connections to a <b>MSSQL</b> database as well as a <b>KeyVault</b> for storing sensitive configuration and encryption keys and <b>SendGrid</b> for sending emails.
                </p>
                <p>
                    Tracking the reading behaviour happened on client-side, so that more detailed events and additional context about each event could be tracked, including for example the screen size, the type of input used (keyboard, mouse, touch), and what part of the text was currently visible. Initially the events were immediately sent over to the API via a HTTP request. For the large-scale final versions, tracking was improved by using primarily a <b>SignalR</b> WebSocket channel to send the events from the client to the server, with HTTP as a backup method. Local caching of events was added for two reasons: it allowed tracking to continue without interruptions if there was a temporary interruption in network connectivity, and it reduced the chattiness of the channel by combining events that occurred close to each other in one message.
                </p>
                <p>
                    The final large-scale version of the reader was deployed to Azure, including both the front-end and the backend. This was partly for SignalR support, but also in response to <ExternalLink href="https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/">browsers starting to phase out third-party cookie support</ExternalLink>. Taking advantage of the expetrise I had gained about identity and access management while working at Condatis, I simplified the sign-in functionality for better security, relying on only first-party cookies. This meant that the front-end and back-end had to use the same domain. The deployment pipeline implemented as a <b>GitHub Action</b> deployed each of them to a specific folder on the Azure App Service. The third iteration of the e-reader also included a migration from .NET Core 3.1 to <b>.NET 5</b>, and a switch from SendGrid to <b>SendInBlue</b> (now <ExternalLink href="https://www.brevo.com/">Brevo</ExternalLink>).
                </p>
            </section>

            <section>
                <p>
                    Related to the same PhD project, I also developed another web application. It was used for collecting data from participants who agreed to donate their Kindle reading logs for the research. Once the correct log file was uploaded, the application parsed some basic details from it and asked additional questions about the books that the participant had spend the most time with. The application was buit with <b>Blazor WebAssembly</b> and deployed to <b>Azure</b>, benefiting from services such as <b>Blob Storage</b>, <b>Table Storage</b> and <b>Key Vault</b>. Similarly to the e-reader, the development was done in collaboration with the researcher.
                </p>
                <p>
                    After the data collection for the projects had completed and the applications were no longer used, I set up simplified versions to be used for demonstrating their functionality and design. The goal of these preview versions was to allow showing the application without having to set up a whole new environmet each time, while keeping the running costs minimal, ideally free. I decided to use <b>Vercel</b> to run the front-end, and to allow myself to learn something new, I created a stub API for the e-reader using <b>Edge Functions</b>.
                </p>
            </section>

            <section>
                <h2>Focusing on IAM in the Scottich capital</h2>
                <h4>The Edinburgh time from 2019 to 2022</h4>
                <div className={styles.borderedImage}>
                    <Image
                        src={edinburghImage}
                        alt="Edinburgh castle pictured from the bottom of the hill" />
                    <p>Edinburgh Castle from the south side of the Castle Hill</p>
                </div>
                <p>
                    Working at Codify and the direct interaction with clients was very rewarding, but over the years I started to want something bigger, more challenging, more risk-taking. Moving away from Aberdeen to Edinburgh in 2019 worked for me as a trigger to look for a new opportunity. I spent couple of months working remotely for Codify while researching local software companies and interviewing for several interesting options. Soon I landed on <ExternalLink href="https://condatis.com/">Condatis</ExternalLink>, an identity-focused branch of <ExternalLink href="https://sitekit.co.uk/">Sitekit</ExternalLink> (later separating into its own separate corporate entity), as a senior software developer. One of the main draws of the position was an opportunity to work with some cutting-edge identity technologies. The fact that it involved blockchain was not that interesting in itself, but it showed that the company was at least portraying itself as modern and ready to take some risks.
                </p>
                <p>
                    Little did I know what was waiting for all of us in 2020, when everyone had to suddenly switch to 100% remote working. Software companies were overall less disrupted by the pandemic, and Condatis was especially lucky as many of the processes were already remote-first. Still, the time spent on calls took a toll on everyone, especially on managers who may have had to spend the whole day wearing headphones and staring at a person on screen who was never quite looking to your eyes.
                </p>
                <p>
                    For the first year at Condatis, the projects I worked on revolved around <b>Azure AD B2C</b>, and I spent some time learning the XML structure and syntax for configuring <ExternalLink href="https://learn.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview">custom policies</ExternalLink> for B2C user journeys. The first system I spend a considerable amount of time involved several different custom policies created in the early days of AAD B2C before it was generally availabe. With added complexities such as a <b>Salesforce</b> integration using a proxy <b>ASP.NET Web API</b> and <b>Azure DevOps</b> pipelines that were in less than ideal state, making even small changes was either very risky, very time-consuming, or both. Together with another recently joined engineer we convinced the leadership to allow us to dedicate at least some time to make the solution as a whole a bit more robust, by explaining how we could see the benefits already during the most urgent ongoing changes.
                </p>
                <p>
                    After several projects on B2C, in fall of 2020, I got an opportunity to get involved in work that Condatis was doing around fairly revolutionary idea called <b>Decentralized Identity</b> (also called <b>Self-Sovereign Identity</b>). While the company had worked with similar techonlogy previously, now it was dedicating considerable resources to become one of the leading companies in the area. In the beginning I worked on few prototypes, and started familiarising myself with the technology and its applications. As a very new technology, there were not many easy-to-digest resources available, so my main sources of learning were the draft W3C documents (now official recommendations <ExternalLink href="https://www.w3.org/TR/did-core/">Decentralised Identifiers</ExternalLink> and <ExternalLink href="https://www.w3.org/TR/vc-data-model/">Verifiable Credentials Data Model</ExternalLink>), RFCs for projects such as <ExternalLink href="https://github.com/hyperledger/aries-rfcs">Hyperledger Aries</ExternalLink>, and the examples and documentation provided by some companies that offered services utilising Decentralized Identity.
                </p>
                <p>
                    Condatis started to put more and more emphasis on Decentralised Identity expertise, and as one of the most passionate developers in that area, I was keen to share my knowledge within and outside the company. I co-hosted webinars and wrote some blog posts, as much to solidify my own learning as to help others learn. In 2021 I became the <b>Lead Developer</b> in the team building Condatis&apos;s Decentralised Identity service and customizing it for clients. My role was more and more about planning how to implement new features, making sure they were undestood across the team, and helping with especially tricky parts of the implementation.
                </p>
                <p>
                    As a lead developer, I was given line management responsibilities for two direct reports. The role of a line manager consisted mainly of personal support outside the day-to-day technical role and some administrative tasks. I thoroughly enjoy coaching and helping people to learn and advance in their journey as a software engineer, but I found it difficult to see how I would be the right person to offer them the people-focused support they deserve. However, I took part in the management course that was offered, and did my best to help my direct reports in my own way.
                </p>
                <p>
                    I also worked on a small project where the idea was to use Microsoft&apos;s decentralized identity stack to build a proof of concept for issuing student cards, degree transcripts and training certificates. Together with people from Microsoft and the client, we planned, designed and delivered the PoC. It was exciting to work directly with Microsoft&apos;s representatives and be part of an important project to showcase their technology.
                </p>
                <p>
                    While working at Condatis, I was very vocal about the issues I saw in the processes and ways of working, same way as I was at Codify. I had several discussions with the company leadership where I would give earnest feedback (about the system, never about individuals) and highlight what I thought were the painpoints that held back myself and the team from delivering better results. Whether the issues were engineering-related or stemmed from business priorities, I felt the need to bring them up to drive positive change.
                </p>
            </section>
            <section>
                <h2>The end of the expat</h2>
                <h4>The final years of living in the UK from 2022 to 2023</h4>
                <p>
                    Although the technology we worked with at Condatis was exciting, I started to yearn for an environment where the organisation structure and the ways of working were continuously improved and that strived for the best possible ways of solving problems and creating solutions. Having followed the likes of <ExternalLink href="https://martinfowler.com/">Martin Fowler</ExternalLink> and <ExternalLink href="http://agileotter.blogspot.com/">Tim Ottinger</ExternalLink>, I wanted to be able to learn every day from people who are equally passionate about changing things for better. Therefore, after nearly three years at Condatis, I started to look for other opportunities. Sooner than I realised, I had gotten swept up in an interview process for a quickly growing software consultancy <ExternalLink href="https://www.infinityworks.com/">Infinity Works</ExternalLink>. Reading about their <ExternalLink href="https://handbook.infinityworks.com/consultancy/default-delivery-process/approach">delivery approach</ExternalLink> and engineering culture in general got me convinced that it was a role worth pursuing. And in summer 2022, I started the job as a <b>Senior Consultant</b> at Infinity Works.
                </p>
                <p>
                    One of the main change technology-wise at Infinity Works was swithcing the cloud platform focus from Azure to <b>AWS</b>. During the first couple of months, I joined an internal product team building a prototype with <b>React</b> and AWS services such as <b>Lambda</b>, <b>S3</b> and <b>Cognito</b>. I also went through a course to prepare for AWS certification, and obtained my <b>AWS Certified Developer Associate</b> certificate. The work on the client allowed me to gather more practical experience with AWS, including <b>Cloud Formation and CDK</b>, <b>DynamoDB</b>, <b>Fargate</b> and <b>ELB</b>, as well <b>Okta</b>, <b>Auth0</b>, <b>Splunk</b>, <b>Jenkins</b> and my old friend <b>Salesforce</b>.
                </p>
                <p>
                    My role at Infinity Works was more clearly an individual contributor and I didn&apos;t have any explicit management or lead responsibilities. However, when I rolled on a client, I soon started to look outside my team responsibilities to better understand the bigger picture. After noticing several areas with some room for improvement, such as cross-team communication, which affected my team as well as the overall goals that the client, I started to put more effort in making the client aware of the issues. While focusing mainly on the day-to-day development, I tried to help to keep the momentum going with the activities aiming to improve the ways of working. Although I think I did make a difference together with the Infinity Works team that worked with the client, I started to pile up the same fatigue as I did when at Condatis when I felt I was spearheading the changes that were necessary.
                </p>
            </section>

            <section>
                <h2>The next chapter</h2>
                <h4>From fall 2013 until <code>&#123;new Date().getFullYear()&#125;</code></h4>
                <p>
                    The last part of my history starts when I move back to Finland, but that part is yet to be written, as it is yet to be lived. I have spent a couple of months looking into opportunities in Finland, and trying to find a company that could truly be the place where I can feel that I belong, without having to stay the version of myself that I am today. The ultimate goal I have for my career is to learn, and as long as I&apos;m learning about things that I feel passionate about, I am sure to be on the right path.
                </p>
            </section>

            <p className={styles.attributions}>
                Attributions:
                {" "}
                <ExternalLink href="https://de.wikipedia.org/wiki/Datei:Amiga_1000_PAL.jpg">Amiga 1000 PAL by Kaiiv</ExternalLink>
                {" | "}
            </p>
        </div >
    );
}
