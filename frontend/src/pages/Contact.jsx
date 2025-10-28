import React from 'react'
import './Contact.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur doloribus nisi quo, nesciunt odio aperiam dolore vitae asperiores, optio aliquid voluptas temporibus corporis quas. Blanditiis incidunt saepe magni corrupti sint, molestias, veniam cum molestiae praesentium ad sit eius deserunt accusantium.
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
                    <p>+385 00 000 0000<br/>Dostupni 9:00 - 21:00</p>
                  </div>
                </div>

                <div className='info-card'>
                  <div className='icon-wrapper'>
                    <At size={32} weight="duotone" />
                  </div>
                  <div className='info-content'>
                    <h4>E-mail</h4>
                    <p>info.olivegarden@gmail.com</p>
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
              <input type="email" id="email" name="email" placeholder="vas email..." required />
            </div>
            
            <div className='form-group'>
              <label htmlFor="phone">Broj telefona</label>
              <input type="tel" id="phone" name="phone" placeholder="+387 00 000 0000" />
            </div>
            
            <div className='form-group'>
              <label htmlFor="message">Poruka *</label>
              <textarea id="message" name="message" rows="5" placeholder="Vaša poruka..." required></textarea>
            </div>
            
            <button type="submit" className='submit-btn'>Pošalji upit</button>
          </form>
        </div>

      </div>
      <Footer />
      </div>
      
    </>
  )
}

export default Contact