import React from 'react'
import './Contact.scss'
import NavBar from '../components/NavBar'
import '../Home.scss'
import { HouseSimple, Phone, At } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <>
      <div className='wrapper'>
        <NavBar />
        <div className='contact-main'>
          <div className='contact-headers'>

            <h3>SAZNAJTE SVE STO VAS ZANIMA</h3>

            <h1>KONTAKTIRAJTE NAS</h1>

          </div>
          <div className='line'></div>
          <div className='constact-text-image'>

            <div className='contact-text'>
              <p>
                Dobrodošli u Olive Garden - vašu oazu mira u srcu mediteranske prirode. 
                Naša vikendica nudi savršenu kombinaciju luksuza i privatnosti, idealna za 
                nezaboravan odmor sa porodicom ili prijateljima. Smještena u mirnom okruženju, 
                daleko od gradske buke, pruža vam priliku da se potpuno opustite i uživate u 
                prirodnim ljepotama koje vas okružuju.
              </p>

              <div className='contact-info-cards'>
                <div className='info-card'>
                  <div className='icon-wrapper'>
                    <HouseSimple size={32} weight="duotone" />
                  </div>
                  <div className='info-content'>
                    <h4>Adresa</h4>
                    <p>Maslinov Put 123<br/>21000 Split, Hrvatska</p>
                  </div>
                </div>

                <div className='info-card'>
                  <div className='icon-wrapper'>
                    <Phone size={32} weight="duotone" />
                  </div>
                  <div className='info-content'>
                    <h4>Telefon</h4>
                    <p>+385 91 234 5678<br/>Dostupni 9:00 - 21:00</p>
                  </div>
                </div>

                <div className='info-card'>
                  <div className='icon-wrapper'>
                    <At size={32} weight="duotone" />
                  </div>
                  <div className='info-content'>
                    <h4>E-mail</h4>
                    <p>info@olivegarden.hr<br/>booking@olivegarden.hr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='contact-image'>
              <div className='contact-image-image'></div>
            </div>

          </div>

        </div>

      <div className='contact-form'>

        <div className='form-left'>
          <h2>Pošaljite nam upit</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt eius laudantium blanditiis fugiat tempora alias vitae nostrum delectus doloremque ea adipisci, quibusdam reiciendis vero similique possimus, laborum veniam earum!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis quisquam accusantium ex aut eius rerum quo fuga dicta reiciendis minus eum repudiandae numquam assumenda odit esse dolor, perspiciatis doloribus veniam repellat adipisci? Aut cum, minus non iure et voluptates.
          </p>
        </div>

        <div className='form-right'>
          <form>
            <div className='form-group'>
              <label htmlFor="name">Ime i prezime *</label>
              <input type="text" id="name" name="name" placeholder="Vaše ime i prezime" required />
            </div>
            
            <div className='form-group'>
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" placeholder="vas.email@primjer.com" required />
            </div>
            
            <div className='form-group'>
              <label htmlFor="phone">Broj telefona</label>
              <input type="tel" id="phone" name="phone" placeholder="+387 XX XXX XXX" />
            </div>
            
            <div className='form-group'>
              <label htmlFor="message">Poruka *</label>
              <textarea id="message" name="message" rows="5" placeholder="Vaša poruka..." required></textarea>
            </div>
            
            <button type="submit" className='submit-btn'>Pošalji upit</button>
          </form>
        </div>

      </div>
      </div>
      
    </>
  )
}

export default Contact