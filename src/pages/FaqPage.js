// Hooks
import { useLayoutEffect, useState } from 'react';

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';

// CSS
import '../css/FaqPage.css';
const FaqPage = () => {

    // Scroll to top upon reload or navigation
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);  

    const [selected,setSelected] = useState(null);

    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null);
        }
        setSelected(i);
    };

    return(
        <section>

            <Header/>
            
            <div className='wrapper'>
                <h2>Frequently Asked Questions</h2><br/>
                <div className='accordion'>
                    {data.map((item, i) => (
                        <>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2>{item.q}</h2>
                                <span>{selected === i ? '-':'+'}</span>
                            </div>
                            <div className={
                                selected === i ? 'content show':'content'}
                                ><div>{item.a}</div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <Footer/>

        </section>
    );
};

const data = [
    {
        q: 'What is circumcision?',
        a: 'Circumcision in men involves the cutting off of the foreskin protecting the head (or glans) of the penis. As the only moving part of the penis, the foreskin facilitates sexual activity. It contains nerve endings that play a part in sexual pleasure and its glands produce lubricants that help protect both the head of the penis and the female vagina. It is generally removed for religious reasons but may take place for medical ones.'
    },
    {
        q: 'How many men are circumcised?',
        a: 'Nobody really knows but organizations campaigning against it estimate that worldwide about one in four males are circumcised. National rates vary widely from about 80% of males in the USA to 2% in Sweden, where non-medical circumcision is now illegal in children. In the UK, the number of circumcisions for medical reasons has fallen from 35% of English boys in the 1930s to 6.5% in the 1980s and today some 12,200 such circumcisions are performed annually. Some doctors consider that this is still far too many.'
    },
    {
        q: 'Can circumcision help prevent cancer?',
        a: 'There is little evidence of this. Circumcision in childhood - but not as an adult - may reduce the risk of penile cancer but this disease is very rare anyway and the real risk factors are poor personal hygiene and smoking. Indeed, the countries with the highest rates of circumcision (USA, for example) are also those with the highest rates of penile cancer.'

    },
    {
        q: 'Is circumcision safe?',
        a: 'It is generally accepted that there are serious complications in perhaps 2% of medical circumcisions — 1 in 50. (Figures are obviously higher if the surgeon or hygiene practices are below hospital standard.) Complications include bleeding, infection, ulceration and psychological and sexual problems.The operation is generally carried out under local anaesthetic for boys and general anaesthetic for men. Usually, the patient is discharged the same day but many describe the operation and its aftermath as painful.'
    },    
    {
        q: 'Just so I know, what are the religious reasons?',
        a: 'The majority of religious circumcisions are carried out among Jewish, Muslim and African tribal communities. To Jews, the practice, which is usually carried out when a boy is eight days old, represents the covenant between Abraham and God. To Muslims, it as a sign of submission to God although most do not regard circumcision, which is not mentioned in the Koran, as obligatory. Those who oppose religious circumcision say it is a painful, psychologically damaging and oppressive tradition designed to subjugate the individual and his or her sexuality.'
    }
];

export default FaqPage;