//css
import '../css/AboutPage.css';
//components
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useLayoutEffect } from 'react';


const AboutPage = () => {

    // Scroll to top upon reload or navigation
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

    return(
        <section>
        <Header/>
        <div className='aboutpage'>
        <div className='aboutpage-box'>
            <h2>OVERVIEW</h2>
            <p>
                Circumcision is the surgical removal of the skin covering the tip of the penis. The procedure is fairly common for newborn boys in certain parts of the world, including the United States. Circumcision after the newborn period is possible, but it's a more complex procedure.
                For some families, circumcision is a religious ritual. The procedure can also be a matter of family tradition, personal hygiene or preventive health care. For others, however, circumcision seems unnecessary or disfiguring.
            </p>
        </div>
        <div className='aboutpage-box'>
            <h2>WHY IT’S DONE</h2>
            <p>
                Circumcision is a religious or cultural ritual for many Jewish and Islamic families, as well as certain aboriginal tribes in Africa and Australia. Circumcision can also be a matter of family tradition, personal hygiene or preventive health care.
                Sometimes there's a medical need for circumcision, such as when the foreskin is too tight to be pulled back (retracted) over the glans. In other cases, particularly in parts of Africa, circumcision is recommended for older boys or men to reduce the risk of certain sexually transmitted infections.
            </p>

            <h4>Circumcision might have various health benefits, including:</h4>

            <ul>
                <li>
                    Easier hygiene. Circumcision makes it simpler to wash the penis. However, boys with uncircumcised penises can be taught to wash regularly beneath the foreskin.
                </li>
                <li>
                    Decreased risk of urinary tract infections. The risk of urinary tract infections in males is low, but these infections are more common in uncircumcised males. Severe infections early in life can lead to kidney problems later.
                </li>
                <li>
                    Decreased risk of sexually transmitted infections. Circumcised men might have a lower risk of certain sexually transmitted infections, including HIV. Still, safe sexual practices remain essential.
                </li>
                <li>
                    Prevention of penile problems. Occasionally, the foreskin on an uncircumcised penis can be difficult or impossible to retract (phimosis). This can lead to inflammation of the foreskin or head of the penis.
                </li>
                <li>
                    Decreased risk of penile cancer. Although cancer of the penis is rare, it's less common in circumcised men. In addition, cervical cancer is less common in the female sexual partners of circumcised men.
                </li>
            </ul>
            <p>
            The risks of not being circumcised, however, are not only rare, but avoidable with proper care of the penis.Circumcision might not be an option if certain blood-clotting disorders are present. Also, circumcision might not be appropriate for premature babies who still require medical care in the hospital nursery or for babies born with abnormalities of the penis.
            </p>
            <p>
                Circumcision doesn't affect fertility, nor is circumcision generally thought to enhance or detract from sexual pleasure for men or their partners.
            </p>
        </div>
        <div className='aboutpage-box'>
            <h2>Risk</h2>
            <p>
                Circumcision is the surgical removal of the skin covering the tip of the penis. The procedure is fairly common for newborn boys in certain parts of the world, including the United States. Circumcision after the newborn period is possible, but it's a more complex procedure.
                For some families, circumcision is a religious ritual. The procedure can also be a matter of family tradition, personal hygiene or preventive health care. For others, however, circumcision seems unnecessary or disfiguring.
            </p>
            <h4>Rarely, circumcision might result in foreskin problems. For example:</h4>
            <ul>
                <li>The foreskin might be cut too short or too long</li>
                <li>The foreskin might fail to heal properly</li>
                <li>The remaining foreskin might reattach to the end of the penis, requiring minor surgical repair</li>
            </ul>
        </div>
        <div className='aboutpage-box'>
            <h2>How you prepare</h2>
            <p>
                Before circumcision, the doctor will explain the risks and benefits of the procedure. Whether you're planning to have your son circumcised or you're pursuing circumcision for yourself, you'll likely need to provide written consent for the procedure.
            </p>
        </div>
        <div className='aboutpage-box'>
            <h2>What you can expect</h2>
            <div className='aboutpage-box'>
                <h3>During the procedure</h3>
                <p>
                    Newborn circumcision is often done in the hospital nursery, usually within 10 days after birth.
                    For newborn circumcision, your son will lie on his back with his arms and legs restrained. After the penis and surrounding area are cleansed, an anesthetic will be injected into the base of the penis or applied to the penis as a cream. A special clamp or plastic ring will be attached to the penis, and the foreskin will be removed.
                    Afterward, the penis will be covered with an ointment, such as a topical antibiotic or petroleum jelly, and wrapped loosely with gauze. The procedure generally takes about 10 minutes.
                    Circumcision is similar for older boys and adults. However, the procedure might need to be done under general anesthesia, recovery might take longer and the risk of complications might be greater when done later in life.
                </p>
            </div>
            <div className='aboutpage-box'>
                <h3>After the procedure</h3>
                <p>
                    It usually takes seven to 10 days for the penis to heal. The tip of the penis is likely to be sore at first, and the penis might look red, swollen or bruised. You might notice a small amount of yellow fluid on the tip of the penis as well.
                    If your newborn is fussy as the anesthetic wears off, hold him gently — being careful to avoid putting pressure on the penis.
                    It's OK to wash the penis as it heals. For newborns, change the bandage with each diaper change, and apply a dab of petroleum jelly to the tip of the penis to keep it from sticking to the diaper. Change your baby's diaper often, and make sure the diaper is loosely fastened.
                    If there's a plastic ring instead of a bandage, it will drop off on its own — usually within about a week. Once the penis heals, wash it with soap and water during normal bathing.
                </p>
                <h4>Problems after circumcision are uncommon. Contact the doctor if:</h4>
                <ul>
                    <li>Normal urination doesn't resume within 12 hours of the circumcision</li>
                    <li>There's persistent bleeding</li>
                    <li>There's foul-smelling drainage from the tip of the penis</li>
                    <li>The plastic ring remains in place two weeks after the circumcision</li>
                </ul>
            </div>
        </div>
        </div>
        <Footer/>
        </section>
    )
};

export default AboutPage;