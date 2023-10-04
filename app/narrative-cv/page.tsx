import Image from "next/image"

import ExternalLink from "@/components/external-link"

import styles from './page.module.css'

import amigaImage from '../../public/narrative-cv/amiga.png'
import cardealerImage from '../../public/narrative-cv/cardealer_screenshot.png'
import jklautoImage from '../../public/narrative-cv/jklautotarvike_screenshot.png'
import opekaImage from '../../public/narrative-cv/opeka_report_screenshot.png'
import lahjalista2010 from '../../public/narrative-cv/lahjalista-2010.png'
import lahjalista2013 from '../../public/narrative-cv/lahjalista-2013.png'
import lahjalista2017 from '../../public/narrative-cv/lahjalista-2017.png'
import kuvapankki from '../../public/narrative-cv/kuvapankki_screenshot.png'
import itk from '../../public/narrative-cv/itk.png'
import edinburghImage from '../../public/narrative-cv/edinburgh_castle.jpg'
import ereader from '../../public/narrative-cv/ereader.png'
import ereaderLanding from '../../public/narrative-cv/ereader-landing.png'
import ereaderInfographic from '../../public/narrative-cv/ereader-infographic.png'
import kindleStudy from '../../public/narrative-cv/kindlestudy.png'

export default function NarrativeCV() {

    return (
        <div className={styles.narrativeCv}>
            <h1>Narrative CV</h1>
            <section className={styles.intro}>
                <p>
                    This is my <em>curriculum vitae</em> &ndash; in other words, the course of my life &ndash; in a narrative format. I have written it to put my experience into context, showing where it is rooted and how I have grown from it. While we may have same skills, everyone&apos;s story is different, and I believe that is what we should be valued for as professionals.
                </p>
            </section>

            <section>
                <h2>Gaming as a gateway to coding</h2>
                <h4>From the very beginning, years &#9608;&#9608;&#9608;&#9608; to 1999</h4>
                <div className={styles.borderedImage}>
                    <Image
                        src={amigaImage}
                        alt="An old Amiga computer" />
                </div>
                <p>
                    My first experience with a personal computer was some years before entering school. Unlike a lot of people of my age, it was not with the famous Commodore 64, but a more forgettable x86 PC of some kind. My computer literacy as a pre-schooler was limited to typing a few memorised commands to its UI <ExternalLink href="https://en.wikipedia.org/wiki/MS-DOS">MS DOS</ExternalLink>, most often in order to run <ExternalLink href="https://en.wikipedia.org/wiki/Bubble_Bobble">Bubble Bobble</ExternalLink>. I played the game incessantly, so at some point my big brother blocked me from playing the game by renaming its executable. When I finally got him to tell me the &quot;password&quot; to start the game, I wrote it down to a note, never to be forgotten. And indeed, I still remember that <code>aefthukn</code> is the command to start Bubble Bobble.
                </p>
                <p>
                    Games became a major influence for me, and sparked my interest in coding. After making a racing game using <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)">Visual Basic</ExternalLink> with my cousin (in which you could make buttons move by clicking them), I spent some time learning <b>BASIC</b> in order to code a maze game with a friend in primary school. While the friend &mdash; a year older to me &mdash; went on building an impressive drawing program in BASIC, I mostly played with Visual Basic. At high school I decided to ask my parents to help me buy <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Studio">Visual Studio 6.0</ExternalLink> and a book <em>C++ ja olio-ohjelmointi</em> (&quot;C++ and object-oriented programming&quot;) in order to get into more serious game programming. While the former became just one of many tools I was getting familiar with, the latter built a solid base for my programming skills and a strong opinion about the superiority of <b>object-oriented paradigm</b> (to be later replaced with a all-encompassing advice &quot;it depends&quot;).
                </p>
            </section>

            <section>
                <h2>The Internet dream(weaver) awakens</h2>
                <h4>Senior high, from 1999 to 2002</h4>
                <div className={styles.borderedImage}>
                    <Image
                        src={cardealerImage}
                        alt="Screenshot from an old website with a menu and a form in Finnish" />
                    <p><ExternalLink href="https://web.archive.org/">Web archive</ExternalLink> screenshot from the first commercial website I built for a local car dealer</p>
                </div>
                <p>
                    While making games had taken its place as my ultimate goal for learning programming, I started to dabble with building things for the internet and creating my own websites. <b>C++</b> turned out to be less than ideal for the web, so I quickly started looking for more suitable tools (although I later tried building an <ExternalLink href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">IRC</ExternalLink> bot and a simple web server with C++). After learning to use applications such as <ExternalLink href="https://en.wikipedia.org/wiki/Microsoft_FrontPage">FrontPage</ExternalLink> and <ExternalLink href="https://en.wikipedia.org/wiki/Dreamweaver">Dreamweaver</ExternalLink>, and getting familiar with languages like <b>HTML</b> and <b>CSS</b>, I built my first commercial website for a local car dealer. Eventually, that led to building several web-based systems for them in the coming decade. It also gave me a nudge to start learning more about the web in general, how it works, and how we can get the most out of it.
                </p>
                <p>
                    In the following years I started working occasionally for my father&apos;s company, providing technical support and doing small coding tasks for his clients such as the car dealer above. For example, combining my experience with VB and the web, I used <ExternalLink href="https://en.wikipedia.org/wiki/Visual_Basic_for_Applications">VBA</ExternalLink> to automate data retrieval processes between Excel spreadsheets and external systems. It was probably the first times for me to build any kind of system integration. There is a certain excitement in making two systems talk to each other that is unique, I wonder if it has something to do with making existing systems work together to do more than what they were built to do. As I soon learned, integrating systems also has its unique challenges, which I have continued to learn about throughout my career.
                </p>
            </section>
            <section>
                <h2>The University years begin</h2>
                <h4>From entering university at 2002 to about 2006</h4>
                <p>
                    When it was time to decide what to do after graduating upper secondary school, I took the easy choice of applying to a university that was in my home city Jyväskylä. The course I selected was <b>Information Systems Science</b>, where I could continue to learn about programming, and start to build more theoretical understanding about software engineering as a whole. For the first year, I thrived in the challenging environment and took as many classes as I possibly could. My experience in programming helped me to stay on top of the practical side of the studies, and I was extremely interested in learning about the rest, especially anything about software engineering methodologies. I started learning about <b>Waterfall</b>, <ExternalLink href="https://en.wikipedia.org/wiki/Rational_unified_process">RUP</ExternalLink>, <b>UML</b> &ndash; and my new sage, <ExternalLink href="https://en.wikipedia.org/wiki/Extreme_programming">XP</ExternalLink>. While learning new languages like <b>Java</b> and <b>Delphi</b> was interesting, I found myself most fascinated by more theoretical parts such as <b>object-oriented design</b>, <b>database design</b> and <b>architecture</b>.
                </p>
                <p>
                    In the second year, however, I started to wonder if the road I had chosen would take me to my goal, which was still to be a game programmer. The university course was heavy on theory and didn&apos;t have many classes specifically for building games. When my cousin with similar goals was applying to university and chose one in Tampere that was more suitable for game programming career, I decided to apply as well. We ended up starting our course in <b>Tampere University of Technology</b> (now part of <ExternalLink href="https://www.tuni.fi/en">Tampere University</ExternalLink>) at the same time in 2004. But during my studies there, I ended up leaning more towards methodologies and architecture instead of game-specific classes, and found topics like computer graphics challenging and not as interesting as I had anticipated. By the time we had to choose our major, I had come to a conclusion that game programming was not for me. I loved playing games more than ever, and I did contribute some code to game projects that my cousin was working on, but I had found my passion elsewhere.
                </p>
            </section>
            <section>
                <h2>Growing into a web developer</h2>
                <h4>Somewhere between 2004 and 2007</h4>
                <p>
                    During my studies in high school and at the university, I continued learning web development in my free time, and built more and more complicated web systems, sometimes making some extra money from it. One of the most educational experiences was building my own <b>web framework</b>. I had learned more about frontend and backend technologies, and <b>PHP</b> had become my main language on the server-side (after short spurts with <b>SSI</b> and <b>PERL</b> via CGI). The first version of the framework formed naturally: I took common functionality of various websites I had built and put them in a form that can be easily re-used, and then expanded it into a template for new websites. The second version was built more purposefully, and I used the experience from previous websites to make sure it is configurable and extendable to support all the necessary use cases. After using the framework to build several websites and updating it to adapt to new needs, I began to realise the amount of work it required. That is the kind of experience that has made me appreciate the frameworks and their developers now that I&apos;m smart enough to not build my own.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={jklautoImage}
                        alt="Screenshot from Jyväskylän Autotarvike Oy website" />
                    <p>The same car dealer website in 2013</p>
                </div>
                <p>
                    The PHP framework I adopted after moving away from my own was <ExternalLink href="https://www.yiiframework.com/">Yii</ExternalLink>. It served me well for a long time, and I didn&apos;t see a need to switch to something else, even after trying out popular ones like <b>Drupal</b>, <b>CakePHP</b> and <b>Symphony</b>. Later on, I would learn a lot more about all the different aspects of selecting a framework. Most of them are not easily visible when working by myself on websites that don&apos;t require frequent updates, but they become more evident when considering work in a team of diverse professionals, recruitment challenges, complex deployment pipelines, support and maintenance and so on.
                </p>
                <p>
                    At a later stage of my university studies, it became clear that I wanted to dedicate most of my time to work with the internet and online systems of some sort. I chose <b>hypermedia</b> as my major, as I was interested in the theoretical aspects of modelling networks of data as well as the applied aspect of implementing systems using hypermedia tools. I might not use <ExternalLink href="https://en.wikipedia.org/wiki/Resource_Description_Framework">RDF</ExternalLink> or <ExternalLink href="https://en.wikipedia.org/wiki/Web_Ontology_Language">OWL</ExternalLink> much nowadays, but they were an important part in building my understanding about <b>semantic data</b> and <b>markup languages</b>, as well as the <ExternalLink href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium">W3C</ExternalLink> and various standartization processes of web technologies.
                </p>
            </section>
            <section>
                <h2>Growing into an adult human</h2>
                <h4>From world travels in 2007 until graduation at 2010</h4>
                <p>
                    So far I had lived in a relative safety of my home country, in a relative ease of doing mostly things that I was comfortable with and relatively good at. However, my growing interest in Japan through anime was pulling me in a different direction. Before I knew it, I was taking Japanese lessons, and with a little push from my big brother, I was on a plane, on my way to <ExternalLink href="https://www.tohoku.ac.jp/en/">Tohoku University</ExternalLink> in Sendai. Ahead of me was a full year as an exchange student, completely new and unfamiliar environment and a completely different lifestyle. The journey began with a week of solo travelling before the start of the semester. From the second I landed in Tokyo, I felt the nervousness turn into excitement and then into a elated sense of wonder. Over a decade later, I started to understand myself enough to see the pattern: I thrive when exploring unfamiliar terrain and facing the unknown.
                </p>
                <p>
                    The year in Japan taught me many things, but most importantly for this story, it taught me to work (and live) with different people. I didn&apos;t improve much in my programming skills or gain knowledge of the latest features in languages and frameworks. Instead, I worked in a signal processing lab where I gave presentations (some in <b>English</b>, some in <b>Japanese</b>), talked daily to people from very different fields and many different countries, learned about Japanese <b>culture</b> with Japanese people and fellow foreigners, experienced being an outsider, and supported each other in the dorm room and class room. Because of that, I can better understand different people, and that makes me a better software engineer.
                </p>
                <p>
                    During my time in Japan, I also found <ExternalLink href="https://en.wikipedia.org/wiki/Kendo">kendo</ExternalLink>, a martial art based on Japanese sword fighting techniques and samurai spirit. I joined one of the university kendo clubs where my roommate practiced, and I was hooked by the friendliness of all the club members as much as kendo itself. Soon they became a group of friends unlike anything I had experienced before, and I dedicated a lot of my time and even more of my focus into kendo and the club during the exchange year. Starting kendo put me in a path of growing myself in a very different way, which I have found to be invaluable. Now after 16 years of practicing, it is an inseparable part of me. Explaining how kendo has affected me would be an essay of its own, but some of the most important things include building confidence, coaching others and respecting every encounter. These come from seeing myself improve, taking part in competitions and gradings, receiving and giving feedback, travelling to kendo events, and eventually teaching classes of both beginner and advanced kendo practioners.
                </p>
                <p>
                    After returning to Finland, the remainder of my university time consisted mostly of bigger group projects and the MSc Thesis. The group work gave me a glimpse into working on an actual project with a set goal and a team to achieve that goal, whereas the thesis required an academic approach with the associated background research and a rigorous writing process. I decided to write my thesis in English to showcase and improve my written language skill level. In summer 2010, I graduated from Tampere University of Technology with a <b>Master of Science in Tehnology</b> degree, a major in <b>Hypermedia</b> and a minor in <b>Software Engineering</b>.
                </p>
            </section>
            <section>
                <h2>Start of a software professional&apos;s career</h2>
                <h4>Working for University of Tampere from 2010 to 2014</h4>
                <p>
                    After graduating from university, I wanted to deal with the general conscription, which is required for most men in Finland before they turn 30. As a pacifist, military service was out of question for me, so I applied for non-military service in <b>University of Tampere</b> (now part of Tampere University). I was accepted and joined the Tampere Research Center for Information and Media (TRIM) in summer 2010. I took part in several research projects, usually assisting the researchers in interviews, transcriptions and write-ups, while gradually drifting towards tasks where I could better apply my software knowledge. After co-authoring <ExternalLink href="https://trepo.tuni.fi/handle/10024/65716">a guide for selecting a wiki tool</ExternalLink>, I moved to a project called Opeka. The work with Opeka became the main part of my responsibilities at University of Tampere, and allowed me to move from my one year of non-military service placement into a full-time job as a software engineer.
                </p>
            </section>
            <section id="casestudy-opeka" className={styles.caseStudy}>
                <h3>Case study: Opeka</h3>
                <p>
                    <b>Opeka</b> is a tool to gather data from school teachers about how they use information technology (see <ExternalLink href="https://opeka.fi/en/presentation/index">What is Opeka?</ExternalLink>). My role was to be the software expert in the team, taking care of the <b>technical design and implementation</b> of the system, alongside a project researcher who focused on research questions and data analysis. As the core team was most of the time just the two of us, it was very much a collaborative effort, and I was involved in all aspects of the project. Before releasing the first public version to selected schools, we conducted a <b>pilot study</b> to test the <b>usability</b> of the system and to refine the question set. After the release, we continued to work in an <b>iterative</b> way, going through multiple versions in which the contents and functionality was improved, and increasing the number of respondents and the project scale overall.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={opekaImage}
                        alt="Screenshot from Opeka report page" />
                    <p>One of the Opeka report pages</p>
                </div>
                <p>
                    The questionnaires were directed to teachers, so we worked directly with them to make sure they could use the system with as little friction as possible, and that the answers were meaningful when analyzing the data. This involved tailoring the contents to a the perfect balance between the amount of time teachers had to spend answering and the amount of data we could gather. We used graphical question formats and <b>visualizations</b> of respondents&apos; answers compared to their peers to make answering easier and more rewarding. Listening to <b>feedback</b> was essential as the technology experience level and the situational context where the system was used was very different from our own.
                </p>
                <p>
                    Working with schools, the goverment and various administrative bodies was a key part in the project in many ways. To demonstrate the usefulness of Opeka for decision makers, we highlighted the importance of gathering the data and showed how our way of gathering it was better than the alternatives. In addition to research publications from the gathered data, we built various reports into the systems that could be accessed by different levels of administration, as well as a more restricted public view. Although my role was more on the technical side, I had gained enough experience about the subject matter to give my opinion on contents questions, and I was a key part in discussions when planning new features and evaluating their feasibility.
                </p>
                <p>
                    We made Opeka into a <b>nationwide</b> system for evaluating information and communication technology usage in schools in Finland. It had to be able to handle <b>thousands of respondents</b> and distribute reports for schools, municipalities and goverment-level administrators. Several tools were created for cleaning up the data with as much automation as possible, while improving the questionnaires to minimize the need for clean-up in the future.
                </p>
            </section>
            <section>
                <p>
                    While working at University of Tampere, I had several smaller projects aside Opeka. These included for example a prototype application for viewing multiple social media streams on a <b>multi-touch surface table SUR40</b>, and a message wall <b>displaying SMS and Twitter messages</b> in a conference setting. The four years working in the research group taught me a lot about the challenges of university research, and gave me a chance to take a lot of responsibility, not just for the software I was building but also for <b>finding and solving problems</b> in the wider context.
                </p>
                <p>
                    The message wall service I worked on at the university kicked off a spin-off project with a company that was interested in the idea. While still working at the university for most of the time, I took a part time job at <ExternalLink href="https://www.mediamaisteri.com/en/">Mediamaisteri</ExternalLink> in 2012 to further develop and market it as a service called Conexting and later Conex First. I did several trips around Finland with our sales representative to demonstrate the service to various organisations, while developing it based on the discussions we had with clients. In my time at Mediamaisteri, I implemented a self-service version of the service with payment integration, and some custom deployments for bigger clients.
                </p>
            </section>

            <section>
                <h2>Early career freelancing and personal projects</h2>
                <h4>During spare time all the way from 1999 until about 2017 (and still sometimes)</h4>
                <p>
                    Ever since I built my first website at the end of the 90s, I have done various freelance projects to build websites and other web-based systems aside my day job, university studies or school responsibilities. Some of the systems have been for paying clients, others for various personal projects, but all of them have helped me to learn more about web development.
                </p>
                <p>
                    The first car dealer website I built grew into several websites for sister companies in early 2000s, with an <b>integration to on-premise sales system</b> (and later to an external SaaS offering the company migrated to). Used car stock was displayed in real-time on the website, and the sales staff could use a back-office tool to enrich the online view with details that the on-premise system didn&apos;t support. In addition to the website, I also built an <b>online calendar</b> system in 2004 for arranging meetings, tracking holidays, booking meeting rooms and various other requirements that were discovered along the way. The calendar was in active use for over ten years, and still had some uses after 15 years since its conception, making it my second-longest living online creation. Which brings me to the one in the first place...
                </p>
            </section>

            <section id="casestudy-lahjalista" className={styles.caseStudy}>
                <h3>Case study: Lahjalista.net</h3>
                <p>
                    When all three of my older siblings started to have their own children, planning the gift-giving for our family Christmas gathering became quite a challenge. Most of us had specific things we wanted, instead of receiving something that would end up unused. And everyone wanted to give something useful, but avoid buing the same gift as someone else. These challenges gave birth to an idea for an <b>online wishlist service</b>. For Christmas 2005 I built a website where we could list what each of us wanted. Any of us could then go and reserve the wish, preventing others from buying the same gift. The following year, I spent a lot of time improving it, working with my brother to define a service that could be useful for people outside our familiy as well. We ended up with <b>Lahjalista.net</b> (Finnish word for &quot;Wishlist&quot;), a web service where anyone could create a wishlist and share a link to it.
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
                    The service was developed and maintained as a side project whenever time allowed, adding features based on user feedback and usage patterns. Several years after its creation, the service had gained popularity especially amongst couples who wanted to create a wish registry for their wedding. Catching up with the trend, we started to think about the <b>business model</b> and develop the service with a focus on weddings. Working with a few acquaintances who had graphic and concept design expertise, the service went through two major updates between 2012 and 2016. We had a strong stance to avoid using ads that might distract or degrade the <b>user experience</b>, so we came up with a solution that added value for users while providing a sales channel for partners: an auto-complete functionality for adding wishes, populated throgh an integration with a major retail store and other smaller partners. Some smaller features have also been added to the service, but probably more often than that, features have been simplified, hidden or removed to make the user experience for the majority as good as possible.
                </p>
                <p>
                    At its most popular years, Lahjalista.net had <b>close to 20 000 monthly visitors</b> during wedding seasons. While there is currently not as much development or business activities around Lahjalista.net, it is still actively used by thousands of monthly users. Developed with <b>PHP</b> framework <b>Yii</b>, the core software has been stable without major rework for over a decade. With a classic <b>MVC</b> archirecture and dynamic parts implemented using <b>jQuery</b>-powered <b>AJAX</b> and custom <b>JavaScript</b>, I am content with the technology choices I made in the initial development of the service and throughout the years. That is not to say that I haven&apos;t been tempted to rewrite the whole thing in several occasions, but I have learned how unlikely it is for me to be able to contribute that much time to it.
                </p>
                <p>
                    Working on Lahjalista.net has been one of the defining experiences for me. It has taught what is involved in being fully responsible for a customer-facing service in a very small team with very limited time available. I have learned the value of &quot;good enough&quot; over aiming for perfection. I understand that shortcuts, workarounds and <b>technical debt</b> overall are tools I should have in my toolbox, not something that should be categorically avoided. I know how valuable it is to get a working solution out there, but also understand the need to avoid and prepare for the unexpected. Most of all, I have gained experience from working with users, understanding their problems and helping to solve them, incorporating their opinions and ideas into the development process while maintaining a clear vision of what we are aiming for.
                </p>
            </section>

            <section>
                <p>
                    One of the bigger freelancing projects was <b>kuvapankki.org</b>, which I did for a friend of a friend who was looking for someone to implement their idea of a stock photo gallery for professional photographers. The core functionality was a photo search based on tags that the photographers could set for photos they uploaded to the service. Anyone could browse the photos online, and registered buyers could select the photos they wanted and send a purchase request through the website. The UI had to be impressive and give a streamlined experience for users, so it was designed together with the client. One of the additional technical challenges was adding a watermark to the images to discourage using them without permission.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={kuvapankki}
                        alt="Screenshot from kuvapankki.org gallery page" />
                    <p>Photo search page in kuvapankki.org</p>
                </div>
                <p>
                    The kuvapankki.org project led to a number of smaller projects, as some of the photographers that were part of it asked me to help with their personal websites and online portfolios. These were small but interesting projects as the focus was quite different from what I was used to: instead of focusing on user experience and conveying information efficiently, photographer portfolios were intended to represent the <b>individual characteristics</b> and style of the photographer as accurately as possible. I set aside my idea of a &quot;proper&quot; website and worked on them in a very client-led way. Although I think there was nothing wrong with that approach at the time, nowadays I would probably make more effort to apply good practices from my field and dive deeper to understand the essence of what the client wants.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={itk}
                        alt="Screenshot from itk.fi website in 2016" />
                    <p>ITK conference website front page in 2016</p>
                </div>
                <p>
                    Another larger freelance project was a web system for <b>ITK</b>, a yearly conference in Finland with over a thousand participants and hundreds of submissions to the Call For Papers (CFP). I first worked on the online conference programme as part of my job at University of Tampere, but later built a more comprehensice conference management system that included receiving CFP submissions, managing their peer review and approval process, planning and building the conference programme and an attendee tool for building a personalized conference schedule. The system was built together with the conference organizers, and was a key part in managing the conference between 2012 and 2017. It was built with <b>PHP</b> on top of <b>Yii</b>, <b>HTML</b> and <b>CSS</b> with various UI functions built with <b>JavaScript</b>, and a <b>MySQL</b> data storage.
                </p>
            </section>

            <section>
                <h2>Changing the scenery - Moving abroad</h2>
                <h4>Life in Leicester in 2013 and in Aberdeen from 2014 to 2019</h4>
                <p>
                    In the fall of 2013, life started pulling me to a new direction as I moved &quot;temporarily&quot; to the UK. For some time, I continued working remotely for University of Tampere, but by the following summer, the visit to UK started to look less and less temporary. As my partner was accepted to the University of Aberdeen, Scotland, I started looking for work in Aberdeen. With my lucky choice of career, finding a job in a foreign country was not a major challenge, and I ended up landing a <b>Software Engineer</b> role at <b>Codify</b> (now <ExternalLink href="https://www.sword-codify.com/">Sword Codify</ExternalLink>).
                </p>
                <p>
                    Codify was the first company where I was surrounded by other software engineers. At the time we were about 25 people in total, 20 of which were software engineers by trade. Because of that, most of the people I talked with on daily basis had a similar way of thinking, which was convinient for smooth communication, but not ideal for diversity of viewpoints. This was mitigated by making sure (almost) every engineer was talking to the client and/or end-users. The responsibility of an engineer was much more than just implementing what was asked for. Especially after some significant managerial changes, engineers were involved in projects all the way, starting from the sales discussions and scoping of the project. For me it was a much-needed and welcome change, and I enjoyed talking to clients about their problem and discussing together how we could solve them.
                </p>
                <p>
                    I spent over five years at Codify, covering all of my time in Aberdeen. The technologies used in earlier projects were mainly <b>WPF</b>, <b>WCF</b> and <b>ASP.NET MVC</b>, with <b>MSSQL</b> being the go-to database solution. After the first couple of years I started to crave for more web-focused projects, so I considered switching companies, but the director at the time convinced me to stay by giving me responsibilities that were a better fit for my interests and goals. I started looking into a <b>SPA</b> framework called <ExternalLink href="https://aurelia.io/">Aurelia</ExternalLink>, and eventually became a major force to drive the adaptation of modern web technologies by building necessary tooling and helping other developers, earning the title of <b>Senior Software Engineer</b> in 2017 to match the role. Our projects were also increasingly starting to utilize <b>Azure</b>, which was an extremely interesting set of services. My interest in modern technologies got boosted further by events and conferences I was able to attend, for example <b>NDC</b> in Oslo and London and <b>Azure Dev Tour</b> in London. Some applications I built utilized <b>OAuth</b> and <b>OpenID Connect</b> with <b>Azure AD B2C</b> for logging in, which allowed me to gain more specialized knowledge about authentication and authorization protocols for the web.
                </p>
            </section>

            <section id="casestudy-riskmanagement" className={styles.caseStudy}>
                <h3>Case study: Risk management application</h3>
                <p>
                    A new client approached Codify with a plan for an application to support companies&apos; risk management process. The idea was to create a simple application with a strong focus on user-friendliness, allowing companies to use it without external support or specialized training, while providing numerous advantages over spreadsheet-based risk tracking. As the main developer on the project, I had regular in-depth discussions with the client from the very beginning, working to understand the problem space better and to come up with solutions <b>collaboratively</b>.
                </p>
                <p>
                    There were roughly two types of meetings I had with the client: <b>ideation</b> of a solution for a new requirement, and <b>review</b> of a prototype of previously discussed solution. Ideation was driven by the client as they explained the problem and the solution they had in mind based on their expertice in the field, while I provided concrete suggestions of feasible ways to implement a solution, often using hand-drawn examples of the user interface components. The result of such meeting was usually a refined problem description and an agreed plan forwards in a form of screen scetches, bullet points, formulas as well as timelines and budget. I would then go on and work on the application accordingly, often emailing the client to ask for clarifications as the details of the problem revealed themselves during the development.
                </p>
                <p>
                    Once the implementation was far enough to get a feel of how the solutions work in practice, I would either provide an updated prototype for the client to access and assess in detail, or arrange a review meeting to go through it and iterate further when necessary. Face-to-face reviews often included small adjustments to the solution on the fly and planning of the next iteration in more detail. The development of the system continued in that fashion for some time, and the application expanded from the original idea while it was demonstrated to and adopted by companies that the client worked with.
                </p>
                <p>
                    The application was one of the first ones at Codify using <b>Aurelia</b>, and provided important input for the Aurelia template that we were developing. UI components were built using <ExternalLink href="https://www.telerik.com/kendo-ui">Kendo UI</ExternalLink> (not because of my experience training <ExternalLink href="https://en.wikipedia.org/wiki/Kendo">kendo</ExternalLink>, that was pure coincidence), and <b>Azure</b> resources were used for hosting the application and data storages. For me the best part of the development was the direct <b>communication with the client</b>, who was also an end-user of the solution with all the relevant domain knowledge. The feedback loop was streamlined and made both the development team and the client happy with the progress and the quality of the solution.
                </p>
            </section>

            <section>
                <p>
                    Several of the applications I worked on at Codify were focused on novel data visualizations. One of them was a tool that allowed visualizing and tagging a 3D environment based on a set of point cloud scenes generated from high-accuracy 360 degree photographs. I worked a bit on the main desktop application, but I was mostly focused on the web version that we started developing at the time. The browser application used <b>WebGL</b>-based <ExternalLink href="https://threejs.org/">three.js</ExternalLink> library to provide the 3D visualization using data from the API of the main application, without having to install anything on the end-user&apos;s machine. Another example of a system with a data visualization focus was an online ship route planning tool that used detailed ship schedules to animate the ships moving on a map over the globe, and detected if there was a risk of collision. The map was displayed using <ExternalLink href="https://leafletjs.com/">Leaflet</ExternalLink> and <ExternalLink href="https://www.openstreetmap.org/">OpenStreetMap</ExternalLink>.
                </p>
            </section>

            <section>
                <h2>Focusing on IAM in the Scottish capital</h2>
                <h4>Settling <em>in</em> Edinburgh, from 2019 to 2022</h4>
                <div className={styles.borderedImage}>
                    <Image
                        src={edinburghImage}
                        alt="Edinburgh castle pictured from the bottom of the hill" />
                    <p>Edinburgh Castle from the south side of the Castle Hill</p>
                </div>
                <p>
                    The work at Codify and the direct interaction with clients was rewarding, but over the years I started to want something bigger, more challenging, more risk-taking. Moving away from Aberdeen to Edinburgh in 2019 worked for me as a trigger to look for a new opportunity. I spent a couple of months working remotely for Codify while researching local software companies and interviewing for several interesting options. Soon I landed on <ExternalLink href="https://condatis.com/">Condatis</ExternalLink>, an identity-focused branch of <ExternalLink href="https://sitekit.co.uk/">Sitekit</ExternalLink> (later separating into its own separate corporate entity), as a senior software developer. One of the main draws of the position was an opportunity to work with some cutting-edge identity technologies. The fact that it involved blockchain was not that interesting in itself, but it showed that the company portrayed itself as modern and ready to take some risks.
                </p>
                <p>
                    Little did I know what was waiting for all of us in 2020, when everyone had to suddenly switch to 100% remote working. Software companies were overall less disrupted by the pandemic, and Condatis was especially lucky as many of the processes were already remote-first. Still, the time spent on calls took a toll on everyone, especially on managers who often had to spend the whole day wearing headphones and staring at a person on screen who was never quite looking at your eyes.
                </p>
                <p>
                    For the first year at Condatis, the projects I worked on revolved around <b>Azure AD B2C</b>, and I spent some time learning the XML structure and syntax for configuring <ExternalLink href="https://learn.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview">custom policies</ExternalLink> for B2C user journeys. The first system I spend a considerable amount of time involved several different custom policies created in the early days of AAD B2C before it was generally availabe. With added complexities such as a <b>Salesforce</b> integration using a proxy <b>ASP.NET Web API</b> and <b>Azure DevOps</b> pipelines that were in less than ideal state, making even small changes was either risky, time-consuming, or both. Together with another recently joined engineer we convinced the client and Condatis to dedicate some resources for making the solution a bit more robust, explaining that we would already see the benefits during the most urgent, ongoing changes.
                </p>
                <p>
                    After several projects on B2C, in fall of 2020, I got an opportunity to get involved in work that Condatis was doing around a fairly revolutionary idea called <b>Decentralized Identity</b> (also referred to as <b>Self-Sovereign Identity</b>). While the company had worked with similar techonlogy previously, it was now dedicating considerable resources to become one of the leading companies in the area. In the beginning I worked on a few prototypes, and started familiarising myself with the technology and its applications. As a very new technology, there were not many easy-to-digest resources available, so my main sources of learning were the draft W3C documents (now official recommendations <ExternalLink href="https://www.w3.org/TR/did-core/">Decentralised Identifiers</ExternalLink> and <ExternalLink href="https://www.w3.org/TR/vc-data-model/">Verifiable Credentials Data Model</ExternalLink>), RFCs for projects such as <ExternalLink href="https://github.com/hyperledger/aries-rfcs">Hyperledger Aries</ExternalLink>, and the examples and documentation provided by some companies that offered services utilising Decentralized Identity.
                </p>
                <p>
                    Condatis started to put more and more emphasis on Decentralised Identity expertise, and as one of the most passionate developers in that area, I was keen to share my knowledge within and outside the company. I co-hosted webinars and wrote some blog posts, as much to solidify my own learning as to help others learn. In 2021 I became the <b>Lead Developer</b> in the team building Condatis&apos;s Decentralised Identity service and customizing it for clients. My role was more and more about planning how to implement new features, making sure they were undestood across the team, and helping with particularly tricky parts of the implementation.
                </p>
                <p>
                    As a lead developer, I was given line management responsibilities for two direct reports. The role of a line manager consisted mainly of personal support outside the day-to-day technical role and some administrative tasks. I thoroughly enjoy coaching and helping people to learn and advance in their journey as a software engineer, but I found it difficult to see how I would be the right person to offer them the people-focused support they deserve. However, I took part in the management course that was offered, and did my best to help my direct reports in my own way.
                </p>
                <p>
                    I also worked on a small project where the idea was to use Microsoft&apos;s decentralized identity stack to build a proof of concept for issuing student cards, degree transcripts and training certificates. Together with people from Microsoft and the client, we planned, designed and delivered the PoC. It was exciting to work directly with Microsoft&apos;s representatives and be part of an important project to showcase their technology.
                </p>
                <p>
                    While working at Condatis, I was very vocal about the issues I saw in the processes and ways of working, in much of the same way as I was at Codify. I had several discussions with the company leadership where I would give earnest feedback (about the system, never about individuals) and highlight what I thought were the painpoints that held back myself and the team from delivering better results. Whether the issues were engineering-related or stemmed from business priorities, I felt the need to bring them up to drive positive change.
                </p>
            </section>

            <section>
                <h2>Academia strikes back: Freelancing to support a research project</h2>
                <h4>From 2018 to 2023</h4>
                <p>
                    While working at Codify, I started a side project supporting my partner&apos;s research at the University of Aberdeen. This lead to a development of several applications and an interesting research collaboration, as they continued on the topic as a PhD project at the University of Edinburgh.
                </p>
            </section>

            <section id="casestudy-siriusreader" className={styles.caseStudy}>
                <h3>Case study: Sirius Reader</h3>
                <p>
                    The e-reader project started with an academic study that required creating an online reader application. The idea was to collect various behavioural data when participants read texts with the application. The application had to run on a browser on both desktop and mobile devices to allow participants to easily access it from their own devices. Popular web readers such as Overdrive and Kindle Cloud Reader were used as benchmarks so that the e-reader would be recognizable for people who had experience reading books online. The text was displayed either one or two pages at the time, depending on the device used. The amount of text visible on each page adapted to the browser window. Selected part of the text could be highlighted, with an option to add a comment next to it. Navigation worked by turning the page with keyboard, mouse or touch screen, or by jumping to a specific location using a progress bar at the bottom of the view. In addition to the text itself, the application included questionnaires before and after completing the reading. All of these features were developed collaboratively to ensure that both the research aspect and the software engineering aspect were sufficiently taken into account.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={ereader}
                        alt="E-reader view showing a section of a book in two columns" />
                    <p>Screenshot from the e-reader website when reading a book.</p>
                </div>
                <p>
                    The study was conducted in the University of Aberdeen in 2019. Students of several different courses were assigned reading materials that could be accessed using the e-reader application. Before the main data collection phase, a pilot study was conducted with several participants. This was necessary not just for  testing of the reader itself, but also to ensure that the study would run smoothly and the data collected by the reader contained the necessary information for the analysis. Based on the pilot feedback and observations from the collected data, some tweaks were made to the software before starting the main data collection. In total 50 students took part in the study, and the results were published as part of a Masters dissertation in Psychology.
                </p>
                <p>
                    After successfully applying the e-reader to study reading academic materials, it was then modified to support a second study at the University of Edinburgh in 2020, focusing this time on <b>recreational reading</b>. This version of the reader, called <b>ORB Reader</b>, contained a selection of short stories, and participants were assigned one of them to read based on their answers in a newly added questionnaire. Other features were adapted support the new study as well, and a new pilot study was conducted to ensure the quality of user experience and data collection features. The main study included 60 participants using the e-reader over a period of two weeks. As an additional challenge, participants were compensated for completing the required parts of the study, which meant that we had to be able to track the completion while maintaining anonymity of the data collected from each participant.
                </p>
                <div className={styles.borderedImage}>
                    <Image
                        src={ereaderLanding}
                        alt="E-reader information page with graphical step-to-step guide" />
                    <p>E-reader landing page built for the third, large-scale study</p>
                </div>
                <div className={styles.borderedImage}>
                    <Image
                        src={ereaderInfographic}
                        alt="Screenshot from Reading Behaviour Infographic with various graphs and numbers" />
                    <p>Participant&apos;s personal infographic page from the e-reader.</p>
                </div>
                <p>
                    The third study with the e-reader was in many ways on a different scale. A new version of the software carrying the name <b>Sirus Reader</b> was developed for the study over several months. To attract participants, a library of <b>15 full-length books</b> was obtained by collaborating with popular authors and their publishers. This lead to some changes in the reader to allow loading only necessary parts of the book at a time and to scramble the book contents in transfer, making it more difficult to copy a full contents of a book. Participants could freely select the book they wanted to read using a new library feature, which was developed to include data collection features similar to the main reader. Another major addition was a <b>personal infographic</b> page for participants who had read at least 70 pages of the book, displaying various graphs and sum-ups on their reading process. While my role was only the implementation of the software, all the changes and new requirements were discussed and worked on collaboratively, taking into account the different context of a much larger-scale study. After completing a pilot phase and making the required modifications, the study was publicly available for about 11 months between 2021 and 2022, and attracted over <b>1200 participants</b>.
                </p>
                <p>
                    At the time when the initial study was starting, <b>Aurelia</b> was the front-end framework I was the most familiar with, so I used it for the client-side application. The front-end was deployed to <b>Azure</b> as a free tier <b>App Service</b> in the first study, but I switched to <b>Vercel</b> in the second study to allow using a custom domain without much additional costs. The back-end was a <b>.NET Core Web API</b> deployed to <b>Azure</b> with connections to a <b>MSSQL</b> database as well as a <b>KeyVault</b> for storing sensitive configuration and encryption keys and <b>SendGrid</b> for sending emails.
                </p>
                <p>
                    Tracking the reading behaviour happened on client-side, so that more detailed events and additional context about each event could be tracked, including for example the screen size, the type of input used (keyboard, mouse, touch), and what part of the text was currently visible. Initially the events were immediately sent over to the API via a HTTP request. For the large-scale final versions, tracking was improved by using primarily a <b>SignalR</b> WebSocket channel to send the events from the client to the server, with HTTP as a backup method. Local caching of events was added for two reasons: it allowed tracking to continue without interruptions if there was a temporary interruption in network connectivity, and it reduced the chattiness of the channel by combining events that occurred close to each other in one message.
                </p>
                <p>
                    The final large-scale version of the reader was deployed to Azure, including both the front-end and the backend. This was partly for SignalR support, but also in response to <ExternalLink href="https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/">browsers starting to phase out third-party cookie support</ExternalLink>. Taking advantage of the expertise I had gained about identity and access management while working at Condatis, I simplified the sign-in functionality for better security, relying on only first-party cookies. This meant that the front-end and back-end had to use the same domain. The deployment pipeline implemented as a <b>GitHub Action</b> deployed each of them to a specific folder on the Azure App Service. The third iteration of the e-reader also included a migration from .NET Core 3.1 to <b>.NET 5</b>, and a switch from SendGrid to <b>SendInBlue</b> (now <ExternalLink href="https://www.brevo.com/">Brevo</ExternalLink>).
                </p>
            </section>

            <section>
                <div className={styles.borderedImage}>
                    <Image
                        src={kindleStudy}
                        alt="Kinle study information page with a step-to-step guide" />
                    <p>Kindle study landing page with instructions</p>
                </div>
                <p>
                    Related to the same PhD project, I developed another web application. It was used for collecting data from participants who agreed to donate their Amazon Kindle reading logs for the research. Once the correct log file was uploaded, the application parsed some basic details from it, combined it to  and asked additional questions about the books that the participant had spend the most time with. The application was buit with <b>Blazor WebAssembly</b> and deployed to <b>Azure</b>, benefiting from services such as <b>Blob Storage</b>, <b>Table Storage</b> and <b>Key Vault</b>. Similarly to the e-reader, the development was done in collaboration with the researcher.
                </p>
                <p>
                    After the data collection for the projects was completed and the applications were no longer used, I set up simplified versions for demonstrating their functionality and design. The goal of these preview versions was to allow showing the application without having to set up a whole new environment each time, while keeping the running costs minimal, ideally free. I decided to use <b>Vercel</b> to run the front-end. I created a stub API for the e-reader using <b>Edge Functions</b> to allow myself to learn something new along the way.
                </p>
            </section>

            <section>
                <h2>The end of the expat</h2>
                <h4>The final years of living in the UK from 2022 to 2023</h4>
                <p>
                    Although the technology we worked with at Condatis was exciting, I started to yearn for an environment where the organisation structure and the ways of working were continuously improved and that strived for the best possible ways of solving problems and creating solutions. Having followed the likes of <ExternalLink href="https://martinfowler.com/">Martin Fowler</ExternalLink> and <ExternalLink href="http://agileotter.blogspot.com/">Tim Ottinger</ExternalLink>, I wanted to be able to learn every day from people who are equally passionate about changing things for better. Therefore, after nearly three years at Condatis, I started to look for other opportunities. Sooner than I realised, I had gotten swept up in an interview process for a quickly growing software consultancy <ExternalLink href="https://www.infinityworks.com/">Infinity Works</ExternalLink>. Reading about their <ExternalLink href="https://handbook.infinityworks.com/consultancy/default-delivery-process/approach">delivery approach</ExternalLink> and engineering culture in general got me convinced that it was a role worth pursuing. And in summer 2022, I started the job as a <b>Senior Consultant</b> at Infinity Works.
                </p>
                <p>
                    One of the main changes technology-wise at Infinity Works was switching the cloud platform focus from Azure to <b>AWS</b>. During the first couple of months, I joined an internal product team building a prototype with <b>React</b> and AWS services such as <b>Lambda</b>, <b>S3</b> and <b>Cognito</b>. I also went through a course to prepare for AWS certification, and obtained my <b>AWS Certified Developer Associate</b> certificate. The work with the client allowed me to gather more practical experience with AWS, including <b>Cloud Formation and CDK</b>, <b>DynamoDB</b>, <b>Fargate</b> and <b>ELB</b>, as well <b>Okta</b>, <b>Auth0</b>, <b>Splunk</b>, <b>Jenkins</b> and my old friend <b>Salesforce</b>.
                </p>
                <p>
                    My role at Infinity Works was more clearly an individual contributor and I didn&apos;t have any explicit management or lead responsibilities. However, when I rolled on the client, I soon started to look outside my team responsibilities to better understand the bigger picture. After noticing several areas with some room for improvement, such as cross-team communication, which affected my team as well as the overall goals of the client, I started to put more effort in making the client aware of the issues. While focusing mainly on the day-to-day development, I tried to help to keep the momentum going with the activities aiming to improve the ways of working. Although I think I did make a difference together with the Infinity Works team that worked with the client, I started to pile up the same fatigue as I did at Condatis when I felt I was spearheading the changes that were necessary. After just about a year, in summer 2023, I left Infinity Works in favour of focusing on myself and finding out what I really want to do next.
                </p>
            </section>

            <section>
                <h2>The next chapter</h2>
                <h4>From fall 2013 until <code>&#123;new Date().getFullYear()&#125;</code></h4>
                <p>
                    The last part of my history starts when I move back to Finland, but that part is yet to be written, as it is yet to be lived. I have spent a couple of months looking into opportunities in Finland, trying to find a company that could truly be the place where I can feel that I belong, and where I can change and grow every day. The ultimate goal I have for my career is to learn, and as long as I&apos;m learning about things that I feel passionate about, I am sure to be on the right path.
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
