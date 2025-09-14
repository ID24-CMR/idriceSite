# MNS - Modern Technology Solutions

![GitHub Tag](https://img.shields.io/github/v/tag/ID24-CMR/idriceSite)
![GitHub repo size](https://img.shields.io/github/repo-size/ID24-CMR/idriceSite)
![GitHub language count](https://img.shields.io/github/languages/count/ID24-CMR/idriceSite)
![GitHub top language](https://img.shields.io/github/languages/top/ID24-CMR/idriceSite)
![GitHub Release Date](https://img.shields.io/github/release-date-pre/ID24-CMR/idriceSite)
![GitHub Release Date](https://img.shields.io/github/release-pre/ID24-CMR/idriceSite)

A modern, responsive website showcasing technology services including web development, mobile apps, cloud solutions, and IT consulting.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Dynamic Content**: Products loaded from JSON with loading states and error handling
- **Interactive Elements**: Chat assistant, testimonials slider, and smooth animations
- **Admin Dashboard**: Simple admin panel for content management
- **Contact Form**: Integrated with Formspree for easy communication
- **Modern UI/UX**: Clean, professional design with hover effects and transitions

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design principles
- **Icons**: Font Awesome 6.5.0
- **Forms**: Formspree integration
- **Images**: Picsum Photos for placeholder images
- **Fonts**: Arial, sans-serif

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ID24-CMR/idriceSite.git
   cd idriceSite
   ```

2. **Open in your browser**
   ```bash
   # Simply open index.html in your web browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **For development**
   - Edit HTML files in the root directory
   - Modify CSS in `idrice24/css/`
   - Update JavaScript in `idrice24/js/`
   - Manage product data in `idrice24/data/users.json`

## 🎯 Project Structure

```
idriceSite/
├── index.html              # Main homepage
├── idrice24/
│   ├── about.html          # About us page
│   ├── contact.html        # Contact page
│   ├── products.html       # Products/services page
│   ├── dashboard.html      # Admin dashboard
│   ├── login.html          # Admin login
│   ├── news.html           # News page
│   ├── setting.html        # Settings page
│   ├── assets/             # Images and media files
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript files
│   └── data/               # JSON data files
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Adding New Products
Edit `idrice24/data/users.json`:
```json
{
  "id": 9,
  "title": "New Service",
  "description": "Service description",
  "price": "$299",
  "image": "https://picsum.photos/300/200?random=9"
}
```

### Customizing Styles
- Main styles: `idrice24/css/style.css`
- Header styles: `idrice24/css/header.css`
- Product styles: `idrice24/css/main.css`

### Admin Access
- Username: `admin`
- Password: `4321`
- Access via: `/idrice24/login.html`

## 🎨 Customization

### Colors
Primary color scheme in `style.css`:
- Primary: `#00bfff` (Blue)
- Secondary: `#007acc` (Dark Blue)
- Background: `#f9f9f9` (Light Gray)

### Fonts
- Primary: Arial, sans-serif
- Headings: Various sizes (2rem - 3rem)
- Body: 1.6 line height for readability

## 📱 Responsive Design

The website is built with mobile-first principles:
- CSS Grid for flexible layouts
- Media queries for different screen sizes
- Touch-friendly navigation
- Optimized images and content

## 🔧 Development

### Adding New Pages
1. Create new HTML file in `idrice24/`
2. Include header and footer iframes
3. Add navigation links in `header.html`
4. Style with appropriate CSS

### JavaScript Features
- Product loading with error handling
- Chat assistant functionality
- Testimonials slider
- Admin dashboard interactions

## 🚀 Deployment

### Static Hosting
- Upload all files to your web server
- Ensure all paths are correct
- Test all functionality

### Formspree Setup
1. Create account at [formspree.io](https://formspree.io)
2. Replace form endpoint in `index.html`
3. Test contact form functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact via the website contact form
- Email: [Your Email]

## 🔮 Future Enhancements

- [ ] E-commerce functionality
- [ ] Blog system
- [ ] User authentication
- [ ] Content management system
- [ ] API integration
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Analytics integration

---

**Built with ❤️ by the MNS Team**


⚙️ Backend Design in Spring Boot

Here’s a recommended architecture: what components, endpoints, models, etc.


---

1. Tech stack & setup

Spring Boot (latest stable)

Spring MVC (for REST controllers)

Spring Data JPA (for persistence)

Database: possibly PostgreSQL (or MySQL) for production; H2 for dev/testing

Use Lombok for boilerplate (getters/setters)

Use Spring Security if you want admin login / protected endpoints

Maybe integrate authentication if product buying, etc. (Optional)

Use file storage (local or cloud) for images



---

2. Data Models (Entities)

Here are the main entities I think you’ll need:

Entity	Fields

Service	id, name, description, imageUrl
Product	id, name, description, price, imageUrl, maybe “available”/stock
TeamMember	id, name, title/role, bio (optional), imageUrl
Project	id, name/title, description, imageUrl, details (long description)
Testimonial	id, clientName, quote, maybe clientPhoto
ContactMessage	id, name, email, subject (optional), messageBody, timestamp
User (optional; for admin or for buyers)	id, username/email, password (encrypted), roles







