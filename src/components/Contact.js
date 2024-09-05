import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div class='contact'>
        <main class='contact-container'>
          <h2 class='contact-title'>CONTACT US</h2>
          <section class='contact-page'>
              <div class='contact-details'>
                  <ul class='soc-list'>
                      <li class='soc-info'>
                          <i class='fab fa-facebook-f' />   
                          <div>
                              <h3>: LazyGrail</h3>
                          </div>
                      </li>
                      <li class='soc-info'>
                          <i class='fab fa-instagram'/>    
                          <div>
                               <h3>: @lazy_grail</h3>
                          </div>
                      </li>
                      <li class='soc-info'>
                          <i class='fas fa-envelope' />
                          <div>
                              <h3>: lazygrail@gmail.com</h3>
                          </div>
                      </li>
                    </ul>
              </div>
              <div class='messagebox'>
                  <input type="text" class="chatbox" placeholder="Name"></input>
                  <input type="text" class="chatbox" placeholder="Email"></input>
                  <input type="text" class="chatdetails" placeholder="Message"></input>
                  <a href="#" class="send">Send</a>
              </div>
          </section>
      </main>
    </div>
  )
}

export default Contact
