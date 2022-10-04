import {Link} from "react-router-dom";
import Reference from "./reference";
import Nav from "../Nav";
import React from "react";

export default function Murders() {
    const [state, setState] = React.useState({
        darkmode: false
      });
    
      const handleChange = (event) => {
        console.log("Handling change in app");
        setState({
          ...state,
          darkmode: event.target.checked,
        });
      }

    return (
        <div className="container">
            <Nav generalStateChange={handleChange} state={state}/>   
            <div class="title"><h1>Case 29: The Burgate House Murders</h1></div>
            <article>
                <figure>
                    <img src="./stephenson_000.jpg" class="title__image" loading="lazy" alt="Stephenson" />
                </figure>
                <h2>Introduction</h2>
                <p>
                The gatehouse was a secluded mansion on the edge of the New Forest in Hamshire, England.
                
                It was 8:30pm, on the 1st of September, 1986. The residents had just finished dinner, and were about to enjoy dessert.

                And that's when 3 men, wearing stocking masks, and armed with a shotgun and pickaxes, burst into the dining room.
                </p>
                <h2>Main content</h2>
                <p>The gatehouse was located in forting bridge, a town in Hamshire, England, on the edge of the new forest. It was originally an old farmhouse that was converted into a large mansion.
                It was situated at the end of the long, winding driveway. On a large site of 14 acres, buried behind trees, in what was a very quiet and secluded spot. </p>

                <p>
                The couple that lived there were Joseph and Hilde Cleaver. They were quiet, but sociable people; well liked in the community. 
                Joseph Cleaver was 82 years old, a successful retired publisher. His wife, Hilde, was the same age, and was confined to a wheelchair after suffering a stroke.
                They originally used the house as a holiday home before eventually moving in full-time when Joseph retired.
                On the 1st of September, 1986, Joseph and Hilde Cleaver were enjoying the company of their son, Tom Cleaver, 49 years old, and his wife, Wendy Cleaver, 46 years old.
                Tom and Wendy were helping out, as the live-in cook and handyman had just been fired. So Tom was looking after his elderly parents, keeping an eye on things, until replacements could be found.
                </p>

                <p>Dessert had just been served by their elderly housekeeper, Margaret Murphy, 70 years old. She had worked for the family for 50 years. The Cleavers kept a strict routine when it came to dinner.
                    It was always served at 8pm on the dot, and everybody was expected to be dressed appropriately for the occassion. It was about 8:30pm when the doors to the dining room had suddenly burst open, and three masked men brandinshing a shotgun and pickaxes ented. The intruders screamed at Hilda, Wendy and Magaret to take off their jewelry.
                    Tom and Joseph were ordered to put their wallets and cash on the table. The five were then forced to the upstairs bedroom where they were tied up, some left on the floor, some left on the bed. 
                    Hilda Cleaver was tied up to her wheelchair. The intruders then spent over an hour ransacking the house. They collected together all the guns that Joseph had in his gun cabinet. 
                    They also grabbed the TV and video recorder especially alcohol and other items. They got 90 pounds cash from the men's wallets. The intruders then started ripping paintings off the walls and using the pickaxes to strike into the walls. 
                    They were looking for a hidden safe. They searched everywhere, but couldn't locate it. Frustrated at not being able to find the safe, the intruders stormed back upstairs.
                </p>
            
                <p>At 10:30am, the 2nd of September, 1986, the gatehouse cleaner Nellie Taylor and gardener Edgar Stubbings, arrived for work. They were both alarmed at the sight of smoke coming out of the upstairs windows. They cautiously entered the home, and discovered that it had been torn apart. 
                The dining table was still set with the unfinished dessert still there, but everything else was a mess. The Cleaver's pet poodle was whimpering; the dog had been badly injured. 
                It was in such a bad way that it later had to be put down. </p>
                
                <p>A feeling of dread came over Edgar. He picked up the phone to call the police. But there was nothing but silence. The lines had been cut. 
                The Cleavers had two other dogs that could be heard scratching at a door and whimpering upstairs.</p>
                
                <p>Nellie and Edgar walked upstairs, opened the door, and found Wendy Cleaver, dead. She had been taken from the master bedroom into a separate bedroom. They found the nearby master bedroom was still glowing from a fire that had been lit. 
                That is where the smoke was coming from. It was still too hot to enter.</p>
                
                <p>Edger and Nellie and ran from the house and drove to the local police station to raise the alarm. The crime scene was
                examined by scene of crime officer Detective Constable Malcolm Slaughter.</p>
                
                <h3>The Investigation</h3>

                <p>The first thing he noticed that was that there was unburned fire lighter scattered throughout the house. Whoever was responsible had obiviously intended to burn it down completely.
                He found that the gun cabinet had been emptied, and two double barrel shotguns, a single barrel shotgun, and a 22 rifle were missing along with 12 boxes of ammunition. 
                The Cleavers cocktail cabinet had been emptied and a large amount of spirits had been taken. 
                Signs the intruders were hunting for hidden safe were clear throughout the house.
                Detective immedieately thought the scene was the work of at least two men, possibly more.
                Joseph Hilde and Tom Cleaver and Margaret Murphy were found dead in the upstairs master bedroom, where the fire had been lit.
                Two gallons of petrol were poured across the curtains, carpet, bed, and over the victims themselves. A lit fire lighter then was then thrown in and a ball of flames erupted.
                Prior to the fire being lit, Wendy Cleaver had been dragged out of the master bedroom, sexually assaulted, then strangled. 
                The killers had tried to burn down the entire house to destroy all evidence, but what they didn't know was that the gatehouse was rebuilt from the 19th century farmhouse.
                It was rebuilt in the 1940 swhen timber was a scarce commodity because of the second world war.
                So mostly concrete was used during the building process.
                That's why the structure of the house remained intact, and there was very little sign of the fire from the outside. The fire pretty much contained itself in the master bedroom.
                </p>
                <figure>
                    <img src="./George_Stephenson_1986.jpg.gallery.jpg" alt="George Stephenson" loading="lazy"></img>
                    <figcaption>George Stephenson, 1986</figcaption>
                </figure>
                <p>
                It looked to be a robbery, but why had the victims been so savagely murdered? Police felt it was one of two reasons: the victims had seen their killer's faces during the attack, or they already knew who they were, which would explain why there were no signs of forced entry.
                The police started looking into the background of the victims. Was there anything there that could shed any light on this crime? They didn't come up with much but while searching Joseph Cleavers study they found a newspaper advertisement he had placed seeking a living cook and handyman at the gatehouse.
                The advertisement was placed only two months earlier. They also found a reference letter attached for a couple who applied for the job: George and Fiona Stevenson.
                Police questioned Nellie and gardener Edgar about the advertisement and they confirmed that the positions had been filled by the couple police located a reference photo for. George and Fiona.
                They landed the job and moved into a small cottage located on the estate grounds in late July only a few months earlier, but they only lasted a few weeks. 
                </p>
                <p>
                George Stephenson beat his wife regularly, and one night Fiona ran out of the cottage to escape his attack, and sought refuge in the gatehouse. The housekeeper Margaret Murphy let Fiona in and hid her from her husband. 
                Fiona ran off the next day. She had only been married to George Stephenson for nine months. They married two weeks after meeting each other in what was a whirlwind romance. 
                When Joseph Cleaver learned of this incident, he was disgusted and immediately sacked Stephenson. Fiona had already taken off and her whereabouts were unknown. 
                All this happened only a few weeks before the murder, and it was the about the only thing police found that could have relevance.             
                </p>
                <p>
                Police started looking into George Stephenson. George had done several stints in jail. He had convictions for burglary, fraud, theft, assaults, drugs, and firearms offenses.
                He also had a conviction for resisting arrest; he sprayed a police officer who was trying to arrest him with tear gas.
                Detectives checked the reference letter and found it had been written by a couple in Bournemouth on the southern coast of England, about a 30-minute drive away from the murder scene.
                They quickly paid that couple a visit to try to get a bit more background on George Stephenson.
                </p>
                <p>
                They almost couldn't believe it when they were invited into the couple's home and they saw a TV and video recorder matching what was stolen from the gatehouse. 
                Police interviewed them extensively. They said the last they spoke with George Stephenson was on Monday morning, the day of the murder.
                Their TV had just broken and Stevenson asked if they wanted a new one, which they said yes, they did. After a bit more general chitchat, Stevenson left.  
                The couple woke up the next morning, Tuesday, the 2nd of September, to find the TV and recorder on their front porch.
                They never saw Stevenson, but had obviously come through for them.
                This information combined with the knowledge Stevenson had been fired from the gatehouse only weeks before the murder was enough to make him their prime suspect.
                Stevenson's wife, Fiona, had also contact the police as soon as she read about the murders. She had no doubt that her husband, who she was still hiding from, was to blame.
                </p>
                <h3> The Hunt </h3>
                <p>
                    With that, Stevenson's picture was on every TV and newspaper in the country, and every police officer was on the lookout for him. He was considered armed and extremely dangerous.
                    Stevenson had grown up in Coventry, England, about a two and a half hour drive away from the murder scene. Police check to that area extensively, and they were in luck.
                    
                    Stevenson had hired a vehicle, a Red Rover 213 only days before their killing, but he didn't pay the deposit for the hire car. That was paid by another man, George Daly, also from Coventry. 
                    Police always felt the crime was committed by more than one person. Now they had a second suspect. 
                    It didn't take long for George Stephenson to see his own face staring back at him from the TV screen. He couldn't hide his shock. It was only days after the murder. 
                    He immediately got on the phone to police in Hampshire. To their surpise Stevenson said he was going to hand himself in.
                    He wanted to clear his name.
                    But before giving himself up, he had a night out on the town, doing a pub crawl around Brockenhurst, about a 30-minute drive away from the murder scene.
                    On this pub crawl, he carried a copy of a newspaper under his arm with his face plastered on the front page, but he had changed his appearance, shaving his mustache off and cutting his hair.
                    Stevenson chatted up two girls in one of the pubs and went back to the campsite that was staying at. They drank together until about 2:00 a.m. Stevenson then left the campsite, walked to a nearby payphone, and rang detectives to come and get him.

                </p>
                <p>
                    In the meantime, police were also honing in on the man who paid the deposit on Stevenson's hire car, George Daly.
                    Police questioned Ruth Smith, who lived with George. She gave a statement that Stephenson and George Daly returned home at 3 a.m. the night of the murders, they walked in with guns and the boxes of ammunition, and they had a third person with them, George's brother, John Daly.
                    They had a large collection of spirits, which they used to have a very loud drinking session until dawn. 

                </p>
                <p>
                    Not only that, Ruth described the panic in George and John Daly when Stevenson's face appeared on TV wanted for the murders. 
                    When they saw that, George and John quickly carried the guns out of the house. 
                </p>
                
                <p>
                    After receiving this information, George and John Daly were quickly takin into custody around the same time, Stevenson handed himself in.
                </p>
                <h3>The Trial</h3>
                <p>
                The trial for the three men commenced at Whinchester Crown Court on the 6th of Octover 1987. All Three men were charged with 5 counts of murder and one count of rape, as well as a robbery.
                All three pleaded not guilty to the charges, but John Daly did plead guilty to the sexual assault of Wendy Cleaver.
                Police believed the motive for the attack was that George Stevenson wanted revenge for being sacked from his job, and he was jealous of the Cleavers wealth and a lavish lifestyle.
                He was the ringleader. He knew it had to end in muder as he risked being identified, even though he was wearing a mask, he feared he would be recognized from his voice and from his shape and build. 
                Having worked at the gate house, Stevenson was familiar with the dinner routine of the Cleavers, always sitting down to eat at precisely 8:00p.m. He was also familiar with the fact they left the front door key on the porch until 9:00p.m.m every night. 

                Getting into the house had been as simple as using that key to let themselves in.
                Stevenson and the Dalys arrived at 8:30p.m. that night. 
                They had brought the petrol, fire lighters, stocking masks, and pickaxes with them, but they stole the shotgun from Joseph's gun cabinet before bursting into the dining room. 
                Where Joseph stored his guns was another thing that Stevenson knew from his time working there.

                They were only expecting the housekeeper Margaret and Joseph and Hilda. They didn't Tom and Wendy would also be present, and that they were only there helping out until Joseph oand Hilda could find a suitable replacement for Stevenson and his wife Fiona. 

                During his police interview, John Daly admitted to the sexual assault of Wendy Cleaver. He says afterwards Stevenson walked into the room with a knife and a piece of cloth.
                John Daly's words:  "He didn't say anything; he just put them on the bed, but I knew what they were for: to kill her with. I thought it was just going to a robbery. I thought we would get thousands.
                I never thought I would have to do anything."
                </p>
                <p>
                Stevenson became a suspect the same day the victims were found. There were no eyewitnesses, no forensics, no groundbreaking police work, they just simply followed up on a newspaper advertisement and a reference letter found in the study of the house. 
                Stevenson wasn't shocked that his face was all over the papers and TV because he was innocent; he was shocked that they identified him so quickly. He couldn't believe it. 
                </p>
                <p>
                He waited a day to hand himself in to give the Dalys time to hide the guns and dump the stolen property and to give himself time to concoct an alibi. 
                In his police interview, Stevenson said he had driven to Bournemouth from Coventry about a two and a half hour drive. He saw two motorcycle gang members hitchhiking, so he decided to give them a lift.
                During the ride, he told the gang members about the gatehouse, and the wealth of the Cleavers, and how Joseph had just fired him, so he says they must have used that information to commit the crime.
                But at the trial, Stevenson changed his story. No longer was he blaming motorcycle gang members he picked up while hitchhiking, he admitted making that up. His new story was that he went to the gatehouse with the Dalys, but he stayed outside and acted only as the getaway driver.
                Stevenson had told the Daly brothers about the guns and they wanted to go there and steal them. Stevenson denied being inside, and denied there was any plan to kill anyone.
                He said: "I would not have harmed them. They were lovely people. They had been good to me."

                </p>
                <p>
                The Dalys defense council was having none of it, saying: "The only way out for you now is to blame the Daly brothers to try and save your own wretched skin. You are a man with no conscience."
                In George Daly's police interview, he says: "After putting some stuff in the car, I went back into the house, and it stank of petrol. Stevenson came down the stairs and said that we're all dead. I thought they were just going to be left tied up, but he said we would have to burn the house, so I lit a fire lighter and threw it over the rail as I was on the stairs. There was no bang; it just went up in a big flash. "
                Unfortunately, Joseph, Hilda, Tom, and Margaret weren't dead when George Daly threw the fire lighter; they died in the fire. George Daly openly wept in the courtroom when this police interview was played. 
                </p>
                <p>
                In relation to the sexual assault of Wendy Cleaver, George Daly continued to deny his involvement. His account is that he walked in on Stephenson attacking her while still holding the shotgun in his hand. 
                He said: "I'm telling the truth. I have nothing to lose because I'm going to be feeling guilty and sent to jail for life anyway. I'm not daft enough to think I'm going to get off this."
                Prosecutor David Alpha wasn't impressed with the defendents each trying to blame the other. In his closing address, he told the jury that all three men had plotted together and all three were as guilty as each other. 
                He said: "Is there one of them that he's not guilty of robbery? Is there one who is not guilty of rape? And is there one of them who was not party to the mayhem, carnage, and murders that took place at the gatehouse?"

                </p>
                <h3>Sentencing</h3>
                <p>
                The trial lasted 17 days. After deliberating for five and a half hours, the jury returned with a guilty verdict for Stevenson and George Daly in relation to the sexual assault of Wendy Cleaver. 
                John Daly had already pled guilty. They didn't reach a verdict on the murders until the next day, the 28th of September, 1987. George Stevenson: guilty for the murders of Joseph, Hilda, Tom, and Margaret. He was acquitted for the murder of Wendy.
                He was sentenced to six life sentences for the four murders, rape, and robbery with a recommendation that he not be released for 25 years.  
                The judge: said: "These murders were committed in circumstances of indescribable brutality and cruielty. You showed no mercy and deserve none." Stephenson just shrugged his shoulders in response. He was 36 years old at the time. 
                
                </p>
                <p>
                    John Daly was found guilty of all five murders and given seven life sentences for those and for the robbery and rape. He was 21 years old. 
                </p>
                <p>
                    Despite the combined 13 life sentences they received, the judge ruled that the'd be served concurrently, so all at the same time, which is why Stevenson was eligible for release after 25 years. 
                    The judge didn't make a minimum order of imprisonment for John Daly.
                </p>
                <p>
                    George Daly was found not guilty of murder; the court accepting his story that he didn't know Joseph, Hilda, Tom and Margaret were still alive when he lit the fire. He was convicted of manslaughter instead.
                    The judge was satisfied; he didn't intentionally kill anyone. However he showed a reckless disregard for human life. He was sentenced to 22 years jail. He was 25 years old. 
                </p>
                <h3>Conclusion</h3>
                <p>
                    While the Daly sentences were being read, Stevenson started sneering at George Daly. George Daly tried to attack him, but they were separated by court officers. 
                    Stevenson then smiled at the jury as he was led away.
                </p>
                <p>
                    There was a wall safe in the house that Stevenson and the Dalys missed. It was hidden behind a curtain. Tom Cleaver also had 700 pounds cash hidden inside his artificial lake which he had as a result of a car crash years before. 
                    He kept his money inside the lathe so that if he was ever marked, the robber would never find it. 

                </p>
                <p>
                    The gatehouse was demolished, and a new home is being built on the side. 
                </p>
                <p>
                    Five people lost their lives, and were savagely murdered for a TV, a video recorder, 90 pounds cash, some alcohol, four guns, and because Stevenson was pissed off he was fired from his job. 
                </p>
                <p>
                    In May 2001, the Home Secratary Jack Straw made a decision to increase Stevenson's minimum term from 25 years to 35 years. Stevenson appealed this decision to the High Court, but the High Court upheld the ruling. 
                    The High Court judge described the murders as sadistic, and said that three of the victims were vurnerable due to age and disability. The ruling means Stevenson can apply for parole in 2021. 
                </p>
                <p>
                    John and George Daly sentences have expired. 
                </p>
            </article>
            
            <div class="reference">
                <h1>Bibliography:</h1>
                
                <Reference name="Case File Podcast Link" hyperlink="https://casefilepodcast.com/case-29-the-burgate-house-murders/" notes=""></Reference>
                <Reference name="George Stephenson"></Reference>
                
            </div>
        </div>
        /*/**
        hyperlink="https://casefilepodcast.com/case-29-the-burgate-house-murders/
                    <p>
                        <Link target="http://www.murderuk.com/mass_george_stephenson.html" rel="noopener"><strong>George Stephenson</strong></Link> - Murder UK
                        <Link target="https://www.murderuk.com/george-stephenson-john-dalywith-george-daly.html" rel="noopener"><strong style={{"color": "red"}}>Updated Link</strong></Link>
                    </p>
                    <p>
                        <Link target="http://murderpedia.org/male.S/s/stephenson-george.htm" rel="noopener"><b>Fordingbridge murders&nbsp;</b></Link> - Murderpedia
                    </p>
                    
                    <p>
                        <Link target="http://www.dailyecho.co.uk/news/2278539.display/" rel="noopener"><strong>Dinner party mass killer fails to get sentence reduced</strong></Link> - Daily Echo
                    </p>
                    <p class="p5">Real crimes and how they were solved magazine, issue number 15, 1993</p>
                    
                    <p>
                        <Link target="https://www.amazon.com/Serial-Killer-Massacre-New-Forest-ebook/dp/B01DI89JA2"  rel="noopener"><strong>Serial Killer: Massacre in the New Forest</strong></Link>
                    </p>
                
            <div className="container">
            
                <div class="title"><h1>Case 29: The Burgate House Murders</h1></div>
                <article>
                <figure>
                    <img src="./stephenson_000.jpg" class="title__image" loading="lazy" alt="Stephenson"> </img>
                </figure>
                <h2>Introduction</h2>
                <p>
                The gatehouse was a secluded mansion on the edge of the New Forest in Hamshire, England.
                
                It was 8:30pm, on the 1st of September, 1986. The residents had just finished dinner, and were about to enjoy dessert.

                And that's when 3 men, wearing stocking masks, and armed with a shotgun and pickaxes, burst into the dining room.
                </p>
                <h2>Main content</h2>
                <p>The gatehouse was located in forting bridge, a town in Hamshire, England, on the edge of the new forest. It was originally an old farmhouse that was converted into a large mansion.
                It was situated at the end of the long, winding driveway. On a large site of 14 acres, buried behind trees, in what was a very quiet and secluded spot. </p>

                <p>
                The couple that lived there were Joseph and Hilde Cleaver. They were quiet, but sociable people; well liked in the community. 
                Joseph Cleaver was 82 years old, a successful retired publisher. His wife, Hilde, was the same age, and was confined to a wheelchair after suffering a stroke.
                They originally used the house as a holiday home before eventually moving in full-time when Joseph retired.
                On the 1st of September, 1986, Joseph and Hilde Cleaver were enjoying the company of their son, Tom Cleaver, 49 years old, and his wife, Wendy Cleaver, 46 years old.
                Tom and Wendy were helping out, as the live-in cook and handyman had just been fired. So Tom was looking after his elderly parents, keeping an eye on things, until replacements could be found.
                </p>

                <p>Dessert had just been served by their elderly housekeeper, Margaret Murphy, 70 years old. She had worked for the family for 50 years. The Cleavers kept a strict routine when it came to dinner.
                    It was always served at 8pm on the dot, and everybody was expected to be dressed appropriately for the occassion. It was about 8:30pm when the doors to the dining room had suddenly burst open, and three masked men brandinshing a shotgun and pickaxes ented. The intruders screamed at Hilda, Wendy and Magaret to take off their jewelry.
                    Tom and Joseph were ordered to put their wallets and cash on the table. The five were then forced to the upstairs bedroom where they were tied up, some left on the floor, some left on the bed. 
                    Hilda Cleaver was tied up to her wheelchair. The intruders then spent over an hour ransacking the house. They collected together all the guns that Joseph had in his gun cabinet. 
                    They also grabbed the TV and video recorder especially alcohol and other items. They got 90 pounds cash from the men's wallets. The intruders then started ripping paintings off the walls and using the pickaxes to strike into the walls. 
                    They were looking for a hidden safe. They searched everywhere, but couldn't locate it. Frustrated at not being able to find the safe, the intruders stormed back upstairs.
                </p>
            
                <p>At 10:30am, the 2nd of September, 1986, the gatehouse cleaner Nellie Taylor and gardener Edgar Stubbings, arrived for work. They were both alarmed at the sight of smoke coming out of the upstairs windows. They cautiously entered the home, and discovered that it had been torn apart. 
                The dining table was still set with the unfinished dessert still there, but everything else was a mess. The Cleaver's pet poodle was whimpering; the dog had been badly injured. 
                It was in such a bad way that it later had to be put down. </p>
                
                <p>A feeling of dread came over Edgar. He picked up the phone to call the police. But there was nothing but silence. The lines had been cut. 
                The Cleavers had two other dogs that could be heard scratching at a door and whimpering upstairs.</p>
                
                <p>Nellie and Edgar walked upstairs, opened the door, and found Wendy Cleaver, dead. She had been taken from the master bedroom into a separate bedroom. They found the nearby master bedroom was still glowing from a fire that had been lit. 
                That is where the smoke was coming from. It was still too hot to enter.</p>
                
                <p>Edger and Nellie and ran from the house and drove to the local police station to raise the alarm. The crime scene was
                examined by scene of crime officer Detective Constable Malcolm Slaughter.</p>
                
                <h3>The Investigation</h3>

                <p>The first thing he noticed that was that there was unburned fire lighter scattered throughout the house. Whoever was responsible had obiviously intended to burn it down completely.
                He found that the gun cabinet had been emptied, and two double barrel shotguns, a single barrel shotgun, and a 22 rifle were missing along with 12 boxes of ammunition. 
                The Cleavers cocktail cabinet had been emptied and a large amount of spirits had been taken. 
                Signs the intruders were hunting for hidden safe were clear throughout the house.
                Detective immedieately thought the scene was the work of at least two men, possibly more.
                Joseph Hilde and Tom Cleaver and Margaret Murphy were found dead in the upstairs master bedroom, where the fire had been lit.
                Two gallons of petrol were poured across the curtains, carpet, bed, and over the victims themselves. A lit fire lighter then was then thrown in and a ball of flames erupted.
                Prior to the fire being lit, Wendy Cleaver had been dragged out of the master bedroom, sexually assaulted, then strangled. 
                The killers had tried to burn down the entire house to destroy all evidence, but what they didn't know was that the gatehouse was rebuilt from the 19th century farmhouse.
                It was rebuilt in the 1940 swhen timber was a scarce commodity because of the second world war.
                So mostly concrete was used during the building process.
                That's why the structure of the house remained intact, and there was very little sign of the fire from the outside. The fire pretty much contained itself in the master bedroom.
                </p>
                <figure>
                    <img src="./George_Stephenson_1986.jpg.gallery.jpg" alt="George Stephenson" loading="lazy"></img>
                    <figcaption>George Stephenson, 1986</figcaption>
                </figure>
                <p>
                It looked to be a robbery, but why had the victims been so savagely murdered? Police felt it was one of two reasons: the victims had seen their killer's faces during the attack, or they already knew who they were, which would explain why there were no signs of forced entry.
                The police started looking into the background of the victims. Was there anything there that could shed any light on this crime? They didn't come up with much but while searching Joseph Cleavers study they found a newspaper advertisement he had placed seeking a living cook and handyman at the gatehouse.
                The advertisement was placed only two months earlier. They also found a reference letter attached for a couple who applied for the job: George and Fiona Stevenson.
                Police questioned Nellie and gardener Edgar about the advertisement and they confirmed that the positions had been filled by the couple police located a reference photo for. George and Fiona.
                They landed the job and moved into a small cottage located on the estate grounds in late July only a few months earlier, but they only lasted a few weeks. 
                </p>
                <p>
                George Stephenson beat his wife regularly, and one night Fiona ran out of the cottage to escape his attack, and sought refuge in the gatehouse. The housekeeper Margaret Murphy let Fiona in and hid her from her husband. 
                Fiona ran off the next day. She had only been married to George Stephenson for nine months. They married two weeks after meeting each other in what was a whirlwind romance. 
                When Joseph Cleaver learned of this incident, he was disgusted and immediately sacked Stephenson. Fiona had already taken off and her whereabouts were unknown. 
                All this happened only a few weeks before the murder, and it was the about the only thing police found that could have relevance.             
                </p>
                <p>
                Police started looking into George Stephenson. George had done several stints in jail. He had convictions for burglary, fraud, theft, assaults, drugs, and firearms offenses.
                He also had a conviction for resisting arrest; he sprayed a police officer who was trying to arrest him with tear gas.
                Detectives checked the reference letter and found it had been written by a couple in Bournemouth on the southern coast of England, about a 30-minute drive away from the murder scene.
                They quickly paid that couple a visit to try to get a bit more background on George Stephenson.
                </p>
                <p>
                They almost couldn't believe it when they were invited into the couple's home and they saw a TV and video recorder matching what was stolen from the gatehouse. 
                Police interviewed them extensively. They said the last they spoke with George Stephenson was on Monday morning, the day of the murder.
                Their TV had just broken and Stevenson asked if they wanted a new one, which they said yes, they did. After a bit more general chitchat, Stevenson left.  
                The couple woke up the next morning, Tuesday, the 2nd of September, to find the TV and recorder on their front porch.
                They never saw Stevenson, but had obviously come through for them.
                This information combined with the knowledge Stevenson had been fired from the gatehouse only weeks before the murder was enough to make him their prime suspect.
                Stevenson's wife, Fiona, had also contact the police as soon as she read about the murders. She had no doubt that her husband, who she was still hiding from, was to blame.
                </p>
                <h3> The Hunt </h3>
                <p>
                    With that, Stevenson's picture was on every TV and newspaper in the country, and every police officer was on the lookout for him. He was considered armed and extremely dangerous.
                    Stevenson had grown up in Coventry, England, about a two and a half hour drive away from the murder scene. Police check to that area extensively, and they were in luck.
                    
                    Stevenson had hired a vehicle, a Red Rover 213 only days before their killing, but he didn't pay the deposit for the hire car. That was paid by another man, George Daly, also from Coventry. 
                    Police always felt the crime was committed by more than one person. Now they had a second suspect. 
                    It didn't take long for George Stephenson to see his own face staring back at him from the TV screen. He couldn't hide his shock. It was only days after the murder. 
                    He immediately got on the phone to police in Hampshire. To their surpise Stevenson said he was going to hand himself in.
                    He wanted to clear his name.
                    But before giving himself up, he had a night out on the town, doing a pub crawl around Brockenhurst, about a 30-minute drive away from the murder scene.
                    On this pub crawl, he carried a copy of a newspaper under his arm with his face plastered on the front page, but he had changed his appearance, shaving his mustache off and cutting his hair.
                    Stevenson chatted up two girls in one of the pubs and went back to the campsite that was staying at. They drank together until about 2:00 a.m. Stevenson then left the campsite, walked to a nearby payphone, and rang detectives to come and get him.

                </p>
                <p>
                    In the meantime, police were also honing in on the man who paid the deposit on Stevenson's hire car, George Daly.
                    Police questioned Ruth Smith, who lived with George. She gave a statement that Stephenson and George Daly returned home at 3 a.m. the night of the murders, they walked in with guns and the boxes of ammunition, and they had a third person with them, George's brother, John Daly.
                    They had a large collection of spirits, which they used to have a very loud drinking session until dawn. 

                </p>
                <p>
                    Not only that, Ruth described the panic in George and John Daly when Stevenson's face appeared on TV wanted for the murders. 
                    When they saw that, George and John quickly carried the guns out of the house. 
                </p>
                
                <p>
                    After receiving this information, George and John Daly were quickly takin into custody around the same time, Stevenson handed himself in.
                </p>
                <h3>The Trial</h3>
                <p>
                The trial for the three men commenced at Whinchester Crown Court on the 6th of Octover 1987. All Three men were charged with 5 counts of murder and one count of rape, as well as a robbery.
                All three pleaded not guilty to the charges, but John Daly did plead guilty to the sexual assault of Wendy Cleaver.
                Police believed the motive for the attack was that George Stevenson wanted revenge for being sacked from his job, and he was jealous of the Cleavers wealth and a lavish lifestyle.
                He was the ringleader. He knew it had to end in muder as he risked being identified, even though he was wearing a mask, he feared he would be recognized from his voice and from his shape and build. 
                Having worked at the gate house, Stevenson was familiar with the dinner routine of the Cleavers, always sitting down to eat at precisely 8:00p.m. He was also familiar with the fact they left the front door key on the porch until 9:00p.m.m every night. 

                Getting into the house had been as simple as using that key to let themselves in.
                Stevenson and the Dalys arrived at 8:30p.m. that night. 
                They had brought the petrol, fire lighters, stocking masks, and pickaxes with them, but they stole the shotgun from Joseph's gun cabinet before bursting into the dining room. 
                Where Joseph stored his guns was another thing that Stevenson knew from his time working there.

                They were only expecting the housekeeper Margaret and Joseph and Hilda. They didn't Tom and Wendy would also be present, and that they were only there helping out until Joseph oand Hilda could find a suitable replacement for Stevenson and his wife Fiona. 

                During his police interview, John Daly admitted to the sexual assault of Wendy Cleaver. He says afterwards Stevenson walked into the room with a knife and a piece of cloth.
                John Daly's words:  "He didn't say anything; he just put them on the bed, but I knew what they were for: to kill her with. I thought it was just going to a robbery. I thought we would get thousands.
                I never thought I would have to do anything."
                </p>
                <p>
                Stevenson became a suspect the same day the victims were found. There were no eyewitnesses, no forensics, no groundbreaking police work, they just simply followed up on a newspaper advertisement and a reference letter found in the study of the house. 
                Stevenson wasn't shocked that his face was all over the papers and TV because he was innocent; he was shocked that they identified him so quickly. He couldn't believe it. 
                </p>
                <p>
                He waited a day to hand himself in to give the Dalys time to hide the guns and dump the stolen property and to give himself time to concoct an alibi. 
                In his police interview, Stevenson said he had driven to Bournemouth from Coventry about a two and a half hour drive. He saw two motorcycle gang members hitchhiking, so he decided to give them a lift.
                During the ride, he told the gang members about the gatehouse, and the wealth of the Cleavers, and how Joseph had just fired him, so he says they must have used that information to commit the crime.
                But at the trial, Stevenson changed his story. No longer was he blaming motorcycle gang members he picked up while hitchhiking, he admitted making that up. His new story was that he went to the gatehouse with the Dalys, but he stayed outside and acted only as the getaway driver.
                Stevenson had told the Daly brothers about the guns and they wanted to go there and steal them. Stevenson denied being inside, and denied there was any plan to kill anyone.
                He said: "I would not have harmed them. They were lovely people. They had been good to me."

                </p>
                <p>
                The Dalys defense council was having none of it, saying: "The only way out for you now is to blame the Daly brothers to try and save your own wretched skin. You are a man with no conscience."
                In George Daly's police interview, he says: "After putting some stuff in the car, I went back into the house, and it stank of petrol. Stevenson came down the stairs and said that we're all dead. I thought they were just going to be left tied up, but he said we would have to burn the house, so I lit a fire lighter and threw it over the rail as I was on the stairs. There was no bang; it just went up in a big flash. "
                Unfortunately, Joseph, Hilda, Tom, and Margaret weren't dead when George Daly threw the fire lighter; they died in the fire. George Daly openly wept in the courtroom when this police interview was played. 
                </p>
                <p>
                In relation to the sexual assault of Wendy Cleaver, George Daly continued to deny his involvement. His account is that he walked in on Stephenson attacking her while still holding the shotgun in his hand. 
                He said: "I'm telling the truth. I have nothing to lose because I'm going to be feeling guilty and sent to jail for life anyway. I'm not daft enough to think I'm going to get off this."
                Prosecutor David Alpha wasn't impressed with the defendents each trying to blame the other. In his closing address, he told the jury that all three men had plotted together and all three were as guilty as each other. 
                He said: "Is there one of them that he's not guilty of robbery? Is there one who is not guilty of rape? And is there one of them who was not party to the mayhem, carnage, and murders that took place at the gatehouse?"

                </p>
                <h3>Sentencing</h3>
                <p>
                The trial lasted 17 days. After deliberating for five and a half hours, the jury returned with a guilty verdict for Stevenson and George Daly in relation to the sexual assault of Wendy Cleaver. 
                John Daly had already pled guilty. They didn't reach a verdict on the murders until the next day, the 28th of September, 1987. George Stevenson: guilty for the murders of Joseph, Hilda, Tom, and Margaret. He was acquitted for the murder of Wendy.
                He was sentenced to six life sentences for the four murders, rape, and robbery with a recommendation that he not be released for 25 years.  
                The judge: said: "These murders were committed in circumstances of indescribable brutality and cruielty. You showed no mercy and deserve none." Stephenson just shrugged his shoulders in response. He was 36 years old at the time. 
                
                </p>
                <p>
                    John Daly was found guilty of all five murders and given seven life sentences for those and for the robbery and rape. He was 21 years old. 
                </p>
                <p>
                    Despite the combined 13 life sentences they received, the judge ruled that the'd be served concurrently, so all at the same time, which is why Stevenson was eligible for release after 25 years. 
                    The judge didn't make a minimum order of imprisonment for John Daly.
                </p>
                <p>
                    George Daly was found not guilty of murder; the court accepting his story that he didn't know Joseph, Hilda, Tom and Margaret were still alive when he lit the fire. He was convicted of manslaughter instead.
                    The judge was satisfied; he didn't intentionally kill anyone. However he showed a reckless disregard for human life. He was sentenced to 22 years jail. He was 25 years old. 
                </p>
                <h3>Conclusion</h3>
                <p>
                    While the Daly sentences were being read, Stevenson started sneering at George Daly. George Daly tried to attack him, but they were separated by court officers. 
                    Stevenson then smiled at the jury as he was led away.
                </p>
                <p>
                    There was a wall safe in the house that Stevenson and the Dalys missed. It was hidden behind a curtain. Tom Cleaver also had 700 pounds cash hidden inside his artificial lake which he had as a result of a car crash years before. 
                    He kept his money inside the lathe so that if he was ever marked, the robber would never find it. 

                </p>
                <p>
                    The gatehouse was demolished, and a new home is being built on the side. 
                </p>
                <p>
                    Five people lost their lives, and were savagely murdered for a TV, a video recorder, 90 pounds cash, some alcohol, four guns, and because Stevenson was pissed off he was fired from his job. 
                </p>
                <p>
                    In May 2001, the Home Secratary Jack Straw made a decision to increase Stevenson's minimum term from 25 years to 35 years. Stevenson appealed this decision to the High Court, but the High Court upheld the ruling. 
                    The High Court judge described the murders as sadistic, and said that three of the victims were vurnerable due to age and disability. The ruling means Stevenson can apply for parole in 2021. 
                </p>
                <p>
                    John and George Daly sentences have expired. 
                </p>
            </article>
            <div class="reference">
                <h1>Bibliography:</h1>
                <p>
                    <Link target ="https://casefilepodcast.com/case-29-the-burgate-house-murders/" rel="noopener">https://casefilepodcast.com/case-29-the-burgate-house-murders/</Link>
                </p>
                <p>
                    <Link target="http://www.murderuk.com/mass_george_stephenson.html" rel="noopener"><strong>George Stephenson</strong></Link> - Murder UK
                    <Link target="https://www.murderuk.com/george-stephenson-john-dalywith-george-daly.html" rel="noopener"><strong style={{"color": "red"}}>Updated Link</strong></Link>
                </p>
                <p>
                    <Link target="http://murderpedia.org/male.S/s/stephenson-george.htm" rel="noopener"><b>Fordingbridge murders&nbsp;</b></Link> - Murderpedia
                </p>
                
                <p>
                    <Link target="http://www.dailyecho.co.uk/news/2278539.display/" rel="noopener"><strong>Dinner party mass killer fails to get sentence reduced</strong></Link> - Daily Echo
                </p>
                <p class="p5">Real crimes and how they were solved magazine, issue number 15, 1993</p>
                
                <p>
                    <Link target="https://www.amazon.com/Serial-Killer-Massacre-New-Forest-ebook/dp/B01DI89JA2"  rel="noopener"><strong>Serial Killer: Massacre in the New Forest</strong></Link>
                </p>   
            </div>
        </div>
        */
    );
}