import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-info'>
          <h3>Address</h3>
          <p>123 Main Street, Nothingtown, Nowhere</p> <br />
          <h3>Contact</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: email@example.com</p> <br />
          <h3>Follow Us</h3>
          <div className='social-media'>
            <a href='https://www.facebook.com/'><Facebook color='white'/></a>
            <a href='https://twitter.com/'><Twitter color='white'/></a>
            <a href='https://www.instagram.com/'><Instagram color='white'/></a>
            <a href='https://www.linkedin.com/'><Linkedin color='white'/></a>
          </div>
        </div>
        <div className='footer-links'>
          <h3>About Us</h3>
          <p>Our Story</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className='footer-links'>
          <h3>Customer Service</h3>
          <p>Shipping & Returns</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQ</p>
        </div>
      </div>
      <div>
        <p>© 2025 Farzaam . All rights reserved.</p>
      </div>
    </div>
  )
}
